## BUILDING NODE IMAGE ##
# Installing node version.
FROM node:18

# To get pnpm on any machine to run this project
RUN npm i -g pnpm

WORKDIR /usr/src/app

# Copying the minimal set of files from this setup to the docker image to install dependencies to the root. 
# Use miniminal files so that if we want to use the same files with no changes, we can use the cached result from previous
# (docker saves cached result from line by line executing of commands.).
COPY package.json pnpm-lock.yaml ./

# Use the current version of pnpm. Frozen is to ensure no updates to pnpm will have an effect.
RUN pnpm install --frozen-lockfile

# Copying the schem.prisma local file to the ./prisma folder in Docker.
COPY prisma/schema.prisma ./prisma
# Re-generating the client when there is a change to the models or settings 
RUN pnpx prisma generate

# Copy everything else besides files that are specified.
# Copy from current directory into the docker build
COPY . .

EXPOSE 8080

# This will run the pnpm command and put words separated by a space into an array.
CMD ["pnpm", "start"]