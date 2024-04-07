# Lambda Redis Example

- Create a new Lambda function in AWS
- npm install and zip this code
- Upload to the Lambda Function
- Create a new Redis Cache
- Set the URL env variable to the Redis endpoint
- Configure the Lambda Function to be on the same VPC
- Run the Lambda Function and see how the cache works

## Scripts
- Compress contents: zip -r myapp.zip index.js node_modules package-lock.json package.json
- Compress: zip index.zip index.js
- Compress contents:
  - mkdir nodejs && cp -r node_modules package.json package-lock.json nodejs/
  - zip -r nodejs.zip nodejs
