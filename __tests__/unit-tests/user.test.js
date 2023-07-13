import request from "supertest";
import server from "../../server/server";

const mockRequestData = {
  username: 'username',
  password: 'password'
}

describe('POST /user/login', () => {

  describe('give a username and password', () => {
    // should save username & password to DB
    // should respond with json object containing username & jwt token

    test.only('should respond with a 200 status code', async () => {
      const response = await request(server).post('/user/login').send(mockRequestData)
      expect(response.statusCode).toBe(200);
    })

      test('response header should contain content-type json', async () => {
      const response = await request(server).post('/user/login').send(mockRequestData)
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    })

      test('response body should contain username', async () => {
      const response = await request(server).post('/user/login').send(mockRequestData)
      expect(response.body.username).toBeDefined();
    })
  })

  describe('when the username and password is missing', () => {
      test('should respond with a status code of 500', async () => {
        const dataList = [{username: 'username'},{password: 'password'}]

        for (const data of dataList){
          const response = await request(server).post('/user/login').send(data)
          expect(response.statusCode).toBe(500);
        }
      })
  })
})