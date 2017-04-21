use sj;


CREATE TABLE IF NOT EXISTS `user`(
    `id` bigint NOT NULL Primary KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `sex` int NOT NULL,
    `type` int NOT NULL,
    `email` varchar(255) NOT NULL,
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    KEY (`type`)
);