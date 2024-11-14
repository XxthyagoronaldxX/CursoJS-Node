ALTER TABLE eleitor
ADD COLUMN perfil INTEGER CHECK (perfil IN (1, 2));

-- 1 = ADMIN, 2 = ELEITOR

ALTER TABLE eleitor
DROP COLUMN perfil;

DELETE FROM eleitor WHERE id = 10;