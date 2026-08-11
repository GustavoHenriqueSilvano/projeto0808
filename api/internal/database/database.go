package database

import (
	"context"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

var Pool *pgxpool.Pool

func Connect() error {
	pool, err := pgxpool.New(context.Background(), os.Getenv("DATABASE_URL"))
	if err != nil {
		return err
	}

	if err := pool.Ping(context.Background()); err != nil {
		pool.Close()
		return err
	}

	Pool = pool
	return nil
}
