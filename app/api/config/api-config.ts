import knex, { Knex } from "knex";

export const retrieveDbConnDetails = (): Knex.StaticConnectionConfig => {
	if (process.env.DB_MODE === "local") {
		return {
			host: "localhost",
			port: 5432,
			user: "postgres",
			password: "postgres",
			database: "hotel-mg",
		};
	} else {
		return {
			host: "localhost",
			port: 5432,
			user: "postgres",
			password: "postgres",
			database: "hotel-mg",
		};
	}
};

export const client = knex({
	client: "pg",
	connection: retrieveDbConnDetails(),
})