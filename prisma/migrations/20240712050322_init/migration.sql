-- CreateTable
CREATE TABLE "vuelos" (
    "id" SERIAL NOT NULL,
    "numero_vuelo" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "hora_salida" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "vuelos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vuelos_numero_vuelo_key" ON "vuelos"("numero_vuelo");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
