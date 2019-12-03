const { Validator } = require('../lib/validator.js');

describe('test validator', () => {
  let validator;

  describe('required fields', () => {
    beforeAll(() => {
      validator = new Validator('name', {
        type: String,
        required: true
      });
    });

    it('returns the field of the object', () => {
      const cat = {
        name: 'Gravy',
        age: 1,
        color: 'grey'
      };

      expect(validator.validate(cat)).toEqual('Gravy');
    });
  });
})
;
