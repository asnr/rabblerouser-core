'use strict';

const adminService = require('../../../../src/services/adminService');
const adminValidator = require('../../../../src/lib/adminValidator');

const adminController = require('../../../../src/controllers/adminController');

function adminsList() {
  return [
    {
      id: 'some-key',
      email: 'some-email',
      name: 'some name',
      phone: 'some phone',
    },
    {
      id: 'some-key2',
      email: 'some-email2',
      name: 'some name',
      phone: 'some phone',
    },
  ];
}

function admin() {
  return {
    id: 'some-key',
    email: 'some-email',
    name: 'some name',
    phone: 'some phone',
  };
}

describe('adminController', () => {
  describe('create', () => {
    let req;
    let res;

    describe('when the branch id is valid', () => {
      beforeEach(() => {
        res = { status: sinon.stub().returns({ json: sinon.spy() }) };
        req = {
          params: { branchId: 1 },
          body: {
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
        sinon.stub(adminValidator, 'isValid').returns([]);
        sinon.stub(adminService, 'create');
      });

      afterEach(() => {
        adminService.create.restore();
        adminValidator.isValid.restore();
      });

      it('responds with successful update', done => {
        adminService.create.returns(Promise.resolve(admin()));
        adminController.create(req, res)
        .then(() => {
          expect(res.status).to.have.been.calledWith(200);
          expect(res.status().json).to.have.been.calledWith(admin());
        }).then(done)
        .catch(done);
      });
    });

    describe('when the branch id is undefined', () => {
      beforeEach(() => {
        res = { status: sinon.stub().returns({ json: sinon.spy() }) };
        req = {
          params: { },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
      });

      it('should return a 400', () => {
        adminController.create(req, res);
        expect(res.status).to.have.been.calledWith(400);
      });
    });

    describe('when the payload provided is invalid', () => {
      beforeEach(() => {
        res = { status: sinon.stub().returns({ json: sinon.spy() }) };
        req = {
          params: { branchId: 1 },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
        sinon.stub(adminValidator, 'isValid').returns(['email']);
      });

      afterEach(() => {
        adminValidator.isValid.restore();
      });

      it('should return a 400', () => {
        adminController.create(req, res);
        expect(res.status).to.have.been.calledWith(400);
      });
    });

    describe('when there is a general error from the service', () => {
      beforeEach(() => {
        res = { sendStatus: sinon.spy() };
        req = {
          params: { branchId: 1 },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
        sinon.stub(adminValidator, 'isValid').returns([]);
        sinon.stub(adminService, 'create');
      });

      afterEach(() => {
        adminService.create.restore();
        adminValidator.isValid.restore();
      });

      it('should return a 500', done => {
        adminService.create.returns(Promise.reject('anything at all'));
        adminController.create(req, res)
        .then(() => {
          expect(res.sendStatus).to.have.been.calledWith(500);
        }).then(done)
        .catch(done);
      });
    });
  });

  describe('update', () => {
    let req;
    let res;

    describe('when the branch id is valid and the admin id is valid', () => {
      beforeEach(() => {
        res = { status: sinon.stub().returns({ json: sinon.spy() }) };
        req = {
          params: { branchId: 1, id: 'some-key' },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
        sinon.stub(adminValidator, 'isValidWithoutPassword').returns([]);
        sinon.stub(adminService, 'updateAdmin').withArgs(req.params.id);
      });

      afterEach(() => {
        adminService.updateAdmin.restore();
        adminValidator.isValidWithoutPassword.restore();
      });

      it('responds with successful update', done => {
        adminService.updateAdmin.returns(Promise.resolve(admin()));
        adminController.update(req, res)
        .then(() => {
          expect(res.status).to.have.been.calledWith(200);
          expect(res.status().json).to.have.been.calledWith(admin());
        }).then(done)
        .catch(done);
      });
    });

    describe('when the branch id is undefined', () => {
      beforeEach(() => {
        res = { status: sinon.stub().returns({ json: sinon.spy() }) };
        req = {
          params: { id: 'some-key' },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
      });

      it('should return a 400', () => {
        adminController.update(req, res);
        expect(res.status).to.have.been.calledWith(400);
      });
    });

    describe('when the admin id is undefined', () => {
      beforeEach(() => {
        res = { status: sinon.stub().returns({ json: sinon.spy() }) };
        req = {
          params: { branchId: 'some-key' },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
      });

      it('should return a 400', () => {
        adminController.update(req, res);
        expect(res.status).to.have.been.calledWith(400);
      });
    });

    describe('when the ad min id doesn\'t match the one in the payload', () => {
      beforeEach(() => {
        res = { status: sinon.stub().returns({ json: sinon.spy() }) };
        req = {
          params: { branchId: 'some-key', id: 'some-b ad-key' },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
      });

      it('should return a 400', done => {
        adminController.update(req, res)
        .then(() => {
          expect(res.status).to.have.been.calledWith(400);
        }).then(done)
        .catch(done);
      });
    });

    describe('when the payload provided is invalid', () => {
      beforeEach(() => {
        res = { status: sinon.stub().returns({ json: sinon.spy() }) };
        req = {
          params: { branchId: 1, id: 'some-key' },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
        sinon.stub(adminValidator, 'isValidWithoutPassword').returns(['email']);
      });

      afterEach(() => {
        adminValidator.isValidWithoutPassword.restore();
      });

      it('should return a 400', () => {
        adminController.update(req, res);
        expect(res.status).to.have.been.calledWith(400);
      });
    });

    describe('when there is a general error from the service', () => {
      beforeEach(() => {
        res = { sendStatus: sinon.spy() };
        req = {
          params: { branchId: 1, id: 'some-key' },
          body: {
            id: 'some-key',
            email: 'some-email',
            name: 'some name',
            phone: 'some phone',
          },
        };
        sinon.stub(adminValidator, 'isValidWithoutPassword').returns([]);
        sinon.stub(adminService, 'updateAdmin').withArgs(req.params.id);
      });

      afterEach(() => {
        adminService.updateAdmin.restore();
        adminValidator.isValidWithoutPassword.restore();
      });

      it('should return a 500', done => {
        adminService.updateAdmin.returns(Promise.reject('anything at all'));
        adminController.update(req, res)
        .then(() => {
          expect(res.sendStatus).to.have.been.calledWith(500);
        }).then(done)
        .catch(done);
      });
    });
  });

  describe('forBranch', () => {
    let req;
    let res;

    beforeEach(() => {
      res = { status: sinon.stub().returns({ json: sinon.spy() }) };
      req = { params: { id: 1 } };
      sinon.stub(adminService, 'admins').withArgs(req.params.id);
    });

    afterEach(() => {
      adminService.admins.restore();
    });


    describe('when the branch id is valid and has admins', () => {
      it('responds with a list of admins', done => {
        adminService.admins.returns(Promise.resolve(adminsList()));
        adminController.forBranch(req, res)
        .then(() => {
          expect(res.status).to.have.been.calledWith(200);
          expect(res.status().json).to.have.been.calledWith({ admins: adminsList() });
        }).then(done)
        .catch(done);
      });
    });

    describe('when the branch id is invalid', () => {
      it('should return a 400', done => {
        res = { sendStatus: sinon.spy() };

        adminService.admins.returns(Promise.reject('invalid branch id'));
        adminController.forBranch(req, res)
        .then(() => {
          expect(res.sendStatus).to.have.been.calledWith(400);
        }).then(done)
        .catch(done);
      });
    });

    describe('when there is a general error from the service', () => {
      it('should return a 500', done => {
        res = { sendStatus: sinon.spy() };

        adminService.admins.returns(Promise.reject('anything at all'));
        adminController.forBranch(req, res)
        .then(() => {
          expect(res.sendStatus).to.have.been.calledWith(500);
        }).then(done)
        .catch(done);
      });
    });
  });
});
