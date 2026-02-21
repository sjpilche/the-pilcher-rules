-- Jake CFO Marketing Site — Lead Capture Tables
-- Run this once against your Azure Postgres database.

CREATE TABLE IF NOT EXISTS contact_submissions (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(100)  NOT NULL,
  email       VARCHAR(255)  NOT NULL,
  message     TEXT          NOT NULL,
  ip_address  VARCHAR(45),
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_email      ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);

CREATE TABLE IF NOT EXISTS demo_requests (
  id          SERIAL PRIMARY KEY,
  first_name  VARCHAR(50)   NOT NULL,
  last_name   VARCHAR(50)   NOT NULL,
  email       VARCHAR(255)  NOT NULL,
  company     VARCHAR(100)  NOT NULL,
  revenue     VARCHAR(50),
  pain_point  TEXT,
  ip_address  VARCHAR(45),
  status      VARCHAR(20)   NOT NULL DEFAULT 'new',   -- new | contacted | demo_scheduled | closed
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_demo_email      ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_company    ON demo_requests(company);
CREATE INDEX IF NOT EXISTS idx_demo_status     ON demo_requests(status);
CREATE INDEX IF NOT EXISTS idx_demo_created_at ON demo_requests(created_at DESC);
