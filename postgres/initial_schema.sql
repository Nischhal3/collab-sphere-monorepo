CREATE EXTENSION IF NOT EXISTS pgcrypto; -- for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS citext;   -- for case-insensitive emails

-- Users table
CREATE TABLE IF NOT EXISTS users (
  password TEXT,
  deleted_at TIMESTAMPTZ,
  full_name TEXT NOT NULL,
  locale TEXT DEFAULT 'en',
  last_login_at TIMESTAMPTZ,
  avatar_url TEXT DEFAULT '',
  timezone TEXT DEFAULT 'UTC',
  email CITEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL, 
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);