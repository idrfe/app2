import pandas as pd
import sys
sys.path.append(r'C:\Data\Python')
import FE_database
import json

with open(r'logic\database\spread.sql', 'r', encoding='utf-8') as file:
    spread = file.read()
data = pd.read_sql_query(spread,FE_database.create_connection())

selected_country='Colombia'
selected_frequency=1
selected_indicator = ['CPIAOP','CPIEOP']

def get_data(selected_country,selected_indicators,selected_frequency):
    return data[(data.entityname==selected_country)&
           (data.frequency==selected_frequency)&
            (data.shortname.isin(selected_indicators))]


#df = get_data(selected_country,selected_indicators,selected_frequency)

def gen_json_series(selected_country,selected_indicators,selected_frequency, gap=0.125):
    # Selecting the desired columns
    df = get_data(selected_country,selected_indicators,selected_frequency)
    selected_columns = ['period', 'value', 'sourcename','shortname']
    selected_data = df[selected_columns]
    indicators = selected_data['shortname'].unique()
    indicator_mapping = {indicator: -gap if idx == 0 else gap for idx, indicator in enumerate(indicators)}
    period_mapping = {period: i + 1 for i, period in enumerate(selected_data['period'].unique())}
    selected_data['period'] = selected_data['period'].map(period_mapping)
    selected_data['period'] = selected_data.apply(lambda row: row['period'] + indicator_mapping[row['shortname']], axis=1)
    selected_data = selected_data.drop('shortname',axis=1)
    selected_data.columns=['x','y','sourcename']
    data_dict = selected_data.to_dict(orient='records')

    data = json.dumps(data_dict)
    data= json.loads(data)
    Series1 = json.dumps([entry for entry in data if entry['x'] == 1-gap or entry['x']==2-gap])
    Series2 = json.dumps([entry for entry in data if entry['x'] == 1+gap or entry['x']==2+gap])
    return Series1, Series2


print(gen_json_series('Colombia',['CPIAOP','CPIEOP'],1)[1])