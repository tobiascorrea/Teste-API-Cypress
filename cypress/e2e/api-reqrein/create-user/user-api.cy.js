function generateUser() {
  const names = ['John', 'Jane', 'Sam', 'Sue'];
  const jobs = ['developer', 'tester', 'manager', 'analyst'];

  const name = names[Math.floor(Math.random() * names.length)];
  const job = jobs[Math.floor(Math.random() * jobs.length)];

  return { name, job };
}

describe('User API Tests', () => {
  it('Create User', () => {
    const user = generateUser();
    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', user.name);
      expect(response.body).to.have.property('job', user.job);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('Create User without name', () => {
    const user = { job: 'leader' };
    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('job', user.job);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('Create User without job', () => {
    const user = { name: 'morpheus' };
    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', user.name);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });

  it('Create User with null fields', () => {
    const user = { name: null, job: null };
    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});