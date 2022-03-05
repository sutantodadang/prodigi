FROM node:latest as base

WORKDIR /usr

# Add package file
# COPY package.json .
# COPY yarn.lock .
# COPY tsconfig.json .

COPY . .

# Install deps
RUN yarn install

# Copy source


# Build dist
# RUN yarn build

CMD [ "yarn","dev" ]

# Start production image build
# FROM node:alpine

# WORKDIR /app

# # Copy node modules and build directory
# COPY --from=base /usr/build ./build
# COPY --from=base /usr/node_modules ./node_modules
# COPY --from=base /usr/package.json ./package.json

# # Copy static files
# # COPY src/public build/src/public

# # Expose port 3000
# EXPOSE 4040
# CMD ["/app","yarn serve"]
# RUN yarn serve
# CMD yarn serve