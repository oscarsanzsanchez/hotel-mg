import { Knex } from "knex";

import { retrieveDbConnDetails } from "./app/api/config/api-config";

module.exports = async (): Promise<Knex.Config> => {
	return {
		client: "pg",
		connection: retrieveDbConnDetails(),
	};
};
