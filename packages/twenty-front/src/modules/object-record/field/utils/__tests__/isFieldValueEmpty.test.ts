import {
  booleanFieldDefinition,
  fieldMetadataId,
  fullNameFieldDefinition,
  linkFieldDefinition,
  relationFieldDefinition,
  selectFieldDefinition,
} from '@/object-record/field/__mocks__/fieldDefinitions';
import { FieldDefinition } from '@/object-record/field/types/FieldDefinition';
import { FieldCurrencyMetadata } from '@/object-record/field/types/FieldMetadata';

import { isFieldValueEmpty } from '../isFieldValueEmpty';

describe('isFieldValueEmpty', () => {
  it('should return correct value for boolean field', () => {
    expect(
      isFieldValueEmpty({
        fieldDefinition: booleanFieldDefinition,
        fieldValue: null,
      }),
    ).toBe(true);
    expect(
      isFieldValueEmpty({
        fieldDefinition: booleanFieldDefinition,
        fieldValue: false,
      }),
    ).toBe(false);
    expect(
      isFieldValueEmpty({
        fieldDefinition: booleanFieldDefinition,
        fieldValue: true,
      }),
    ).toBe(false);
  });

  it('should return correct value for relation field', () => {
    expect(
      isFieldValueEmpty({
        fieldDefinition: relationFieldDefinition,
        fieldValue: null,
      }),
    ).toBe(true);
    expect(
      isFieldValueEmpty({
        fieldDefinition: relationFieldDefinition,
        fieldValue: { foo: 'bar' },
      }),
    ).toBe(false);
  });

  it('should return correct value for select field', () => {
    // If the value does not match the fieldDefinition, it will always return `false`
    // Should it return `false` or `true` if the fieldValue doesn't match?
    expect(
      isFieldValueEmpty({
        fieldDefinition: selectFieldDefinition,
        fieldValue: '',
      }),
    ).toBe(false);
  });

  it('should return correct value for currency field', () => {
    const fieldDefinition: FieldDefinition<FieldCurrencyMetadata> = {
      fieldMetadataId,
      label: 'Annual Income',
      iconName: 'cashCow',
      type: 'CURRENCY',
      metadata: {
        fieldName: 'annualIncome',
        placeHolder: '100000',
        isPositive: true,
      },
    };

    expect(
      isFieldValueEmpty({
        fieldDefinition,
        fieldValue: { currencyCode: 'USD', amountMicros: 1000000 },
      }),
    ).toBe(false);
    expect(
      isFieldValueEmpty({
        fieldDefinition,
        fieldValue: { currencyCode: 'USD' },
      }),
    ).toBe(true);
  });

  it('should return correct value for fullname field', () => {
    expect(
      isFieldValueEmpty({
        fieldDefinition: fullNameFieldDefinition,
        fieldValue: { firstName: '', lastName: '' },
      }),
    ).toBe(true);
    expect(
      isFieldValueEmpty({
        fieldDefinition: fullNameFieldDefinition,
        fieldValue: { firstName: 'Sheldon', lastName: '' },
      }),
    ).toBe(false);
  });

  it('should return correct value for link field', () => {
    expect(
      isFieldValueEmpty({
        fieldDefinition: linkFieldDefinition,
        fieldValue: { url: '', label: '' },
      }),
    ).toBe(true);
    expect(
      isFieldValueEmpty({
        fieldDefinition: linkFieldDefinition,
        fieldValue: { url: 'https://linkedin.com/user-slug', label: '' },
      }),
    ).toBe(false);
  });
});
