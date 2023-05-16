import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';
//import app from '../path/to/app'; // Import the Express app or server instance, not the router

// Test the getProducts function
// Test the getProducts function
describe('GET /api/products/:id', () => {
    it('should fetch a single product by ID', function(done) {

      this.timeout(500000); 
      const productId = '64637c803b62753cc8d7f9f7'; // Replace with an existing product ID
      request('http://localhost:5000')
        .get(`/api/products/${productId}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
  
          // Add your assertions here
          expect(res.body).to.be.an('object');
          expect(res.body._id).to.equal(productId);
          // Add more assertions based on the expected response
  
          done();
        });
    });
  });