select e.entityname, d.entityid, i.shortname, s.sourcename, d.indicatorid, d.period, d.frequency, d.value, d.reportdate from data d
inner join entity e on e.numericcode = d.entityid
inner join indicator i on i.id = d.indicatorid
inner join sourcefe s on s.sourceid = d.sourcedata
where reportdate = '2023-04-01' 
and typedata=1 
and period in ('2023-01-01','2024-01-01') 
and frequency in (1,2)