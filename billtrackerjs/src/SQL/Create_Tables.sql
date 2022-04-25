CREATE TABLE bill_list(
		bill_id int NOT NULL AUTO_INCREMENT,
        bill_name varchar(25),
        bill_cost varchar(25),
        bill_due varchar(25),
        PRIMARY KEY (bill_id)
);