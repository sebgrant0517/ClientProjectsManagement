CREATE TABLE `client_table` (
  `client_id` int NOT NULL,
  `client_name` text NOT NULL,
  `client_pdf` mediumblob NOT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `project_table` (
  `projects_id` int NOT NULL,
  `projects_name` text NOT NULL,
  `projects_description` text NOT NULL,
  `projects_client` text NOT NULL,
  PRIMARY KEY (`projects_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
