import { ClassValidatorFields } from '../../class-validator-fields';
import * as libClassValidator from 'class-validator';

class StubClassValidatorFiedls extends ClassValidatorFields<{
  field: string;
}> {}

describe('ClassValidatorFields unit test', () => {
  it('Should initialize erros and validatedData variable with null', () => {
    const sut = new StubClassValidatorFiedls();

    expect(sut.errors).toMatchObject({});
    expect(sut.validatedData).toMatchObject({});
  });

  it('Should validate with erros', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([
      {
        property: 'field',
        constraints: { isRequired: 'test error' },
      },
    ]);
    const sut = new StubClassValidatorFiedls();

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toMatchObject({});
    expect(sut.errors).toStrictEqual({ field: ['test error'] });
  });
});
