CREATE TABLE `fui_engine_libraries_table` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`creatorId` bigint,
	`name` text,
	`title` text,
	`description` text,
	`library` text,
	`createdAt` text,
	`updatedAt` text,
	CONSTRAINT `fui_engine_libraries_table_id` PRIMARY KEY(`id`)
);
