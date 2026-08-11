package user

import (
	"context"
	"errors"
	"projeto-01/internal/database"

	"github.com/jackc/pgx/v5"
)

var ErrNotFound = errors.New("user not found")

func createUser(ctx context.Context, u User) (User, error) {
	query := `
		INSERT INTO users (name, email, password)
		VALUES ($1, $2, $3)
		RETURNING id, created_at, updated_at`

	err := database.Pool.
		QueryRow(ctx, query, u.Name, u.Email, u.Password).
		Scan(&u.ID, &u.CreatedAt, &u.UpdatedAt)

	if err != nil {
		return User{}, err
	}

	return u, nil
}

func findByEmail(ctx context.Context, email string) (User, error) {
	query := `SELECT id, name, email, password, created_at, updated_at FROM users WHERE email = $1`

	var u User

	err := database.Pool.
		QueryRow(ctx, query, email).
		Scan(&u.ID, &u.Name, &u.Email, &u.Password, &u.CreatedAt, &u.UpdatedAt)

	if errors.Is(err, pgx.ErrNoRows) {
		return User{}, ErrNotFound
	}
	if err != nil {
		return User{}, err
	}

	return u, nil
}
