import { DataSource } from 'typeorm';

import { SeedObjectMetadataIds } from 'src/database/typeorm-seeds/metadata/object-metadata';
import { SeedWorkspaceId } from 'src/database/seeds/metadata';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';

const fieldMetadataTableName = 'fieldMetadata';

export enum SeedCompanyFieldMetadataIds {
  Id = '20202020-8169-44a3-9e0b-6bad1ac50f87',
  CreatedAt = '20202020-4dc2-47c9-bb15-6e6f19ba9e46',
  UpdatedAt = '20202020-64b8-41bf-a01c-be6a806e8b70',

  Name = '20202020-6d30-4111-9f40-b4301906fd3c',

  DomainName = '20202020-5e4e-4007-a630-8a2617914889',
  Address = '20202020-ad10-4117-a039-3f04b7a5f939',
  Employees = '20202020-7fbd-41ad-b64d-25a15ff62f04',
  LinkedinUrl = '20202020-a61d-4b78-b998-3fd88b4f73a1',
  XUrl = '20202020-46e3-479a-b8f4-77137c74daa6',
  AnnualRecurringRevenue = '20202020-4a5a-466f-92d9-c3870d9502a9',
  IdealCustomerProfile = '20202020-9e9f-4235-98b2-c76f3e2d281e',

  People = '20202020-68b4-4c8e-af19-738eba2a42a5',
  AccountOwner = '20202020-0739-495d-8e70-c0807f6b2268',
  AccountOwnerForeignKey = '20202020-0b9e-4b9e-8b0a-5b0b5b0b5b0b',
  ActivityTargets = '20202020-4a2e-4b41-8562-279963e8947e',
  Opportunities = '20202020-e3fc-46ff-b552-3e757843f06e',
  Favorites = '20202020-e7c8-4771-8cc4-ce0e8c36a3c0',
  Attachments = '20202020-61af-4ffd-b79b-baed6db8ad11',
}

export const seedCompanyFieldMetadata = async (
  workspaceDataSource: DataSource,
  schemaName: string,
) => {
  await workspaceDataSource
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${fieldMetadataTableName}`, [
      'id',
      'objectMetadataId',
      'isCustom',
      'workspaceId',
      'isActive',
      'type',
      'name',
      'label',
      'targetColumnMap',
      'description',
      'icon',
      'isNullable',
      'isSystem',
      'defaultValue',
    ])
    .orIgnore()
    .values([
      // Default fields
      {
        id: SeedCompanyFieldMetadataIds.Id,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.UUID,
        name: 'id',
        label: 'Id',
        targetColumnMap: {
          value: 'id',
        },
        description: undefined,
        icon: undefined,
        isNullable: false,
        isSystem: true,
        defaultValue: { type: 'uuid' },
      },
      {
        id: SeedCompanyFieldMetadataIds.CreatedAt,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.DATE,
        name: 'createdAt',
        label: 'Creation date',
        targetColumnMap: {
          value: 'createdAt',
        },
        description: undefined,
        icon: 'IconCalendar',
        isNullable: false,
        isSystem: true,
        defaultValue: { type: 'now' },
      },
      {
        id: SeedCompanyFieldMetadataIds.UpdatedAt,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.DATE,
        name: 'updatedAt',
        label: 'Update date',
        targetColumnMap: {
          value: 'updatedAt',
        },
        description: undefined,
        icon: 'IconCalendar',
        isNullable: false,
        isSystem: true,
        defaultValue: { type: 'now' },
      },
      // Main Identifier
      {
        id: SeedCompanyFieldMetadataIds.Name,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.TEXT,
        name: 'name',
        label: 'Name',
        targetColumnMap: {
          value: 'name',
        },
        description: 'The company name',
        icon: 'IconBuildingSkyscraper',
        isNullable: true,
        isSystem: false,
        defaultValue: { value: '' },
      },
      // Scalar Fields
      {
        id: SeedCompanyFieldMetadataIds.DomainName,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.TEXT,
        name: 'domainName',
        label: 'Domain Name',
        targetColumnMap: {
          value: 'domainName',
        },
        description:
          'The company website URL. We use this url to fetch the company icon',
        icon: 'IconLink',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.Address,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.TEXT,
        name: 'address',
        label: 'Address',
        targetColumnMap: {
          value: 'address',
        },
        description: 'The company address',
        icon: 'IconMap',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.Employees,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.NUMBER,
        name: 'employees',
        label: 'Employees',
        targetColumnMap: {
          value: 'employees',
        },
        description: 'Number of employees in the company',
        icon: 'IconUsers',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.LinkedinUrl,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.LINK,
        name: 'linkedinLink',
        label: 'Linkedin',
        targetColumnMap: {
          label: 'linkedinLinkLabel',
          url: 'linkedinLinkUrl',
        },
        description: 'The company Linkedin account',
        icon: 'IconBrandLinkedin',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.XUrl,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.LINK,
        name: 'xLink',
        label: 'X',
        targetColumnMap: {
          label: 'xLinkLabel',
          url: 'xLinkUrl',
        },
        description: 'The company Twitter/X account',
        icon: 'IconBrandX',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.AnnualRecurringRevenue,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.CURRENCY,
        name: 'annualRecurringRevenue',
        label: 'ARR',
        targetColumnMap: {
          amountMicros: 'annualRecurringRevenueAmountMicros',
          currencyCode: 'annualRecurringRevenueCurrencyCode',
        },
        description:
          'Annual Recurring Revenue: The actual or estimated annual revenue of the company',
        icon: 'IconMoneybag',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.IdealCustomerProfile,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.BOOLEAN,
        name: 'idealCustomerProfile',
        label: 'ICP',
        targetColumnMap: {
          value: 'idealCustomerProfile',
        },
        description:
          'Ideal Customer Profile:  Indicates whether the company is the most suitable and valuable customer for you',
        icon: 'IconTarget',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },

      // Relationships
      {
        id: SeedCompanyFieldMetadataIds.People,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.RELATION,
        name: 'people',
        label: 'People',
        targetColumnMap: {},
        description: 'People linked to the company.',
        icon: 'IconUsers',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.AccountOwner,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.RELATION,
        name: 'accountOwner',
        label: 'Account Owner',
        targetColumnMap: {},
        description:
          'Your team member responsible for managing the company account',
        icon: 'IconUserCircle',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.AccountOwnerForeignKey,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.UUID,
        name: 'accountOwnerId',
        label: 'Account Owner ID (foreign key)',
        targetColumnMap: {},
        description: 'Foreign key for account owner',
        icon: undefined,
        isNullable: true,
        isSystem: true,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.ActivityTargets,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.RELATION,
        name: 'activityTargets',
        label: 'Activities',
        targetColumnMap: {},
        description: 'Activities tied to the company',
        icon: 'IconCheckbox',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.Opportunities,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.RELATION,
        name: 'opportunities',
        label: 'Opportunities',
        targetColumnMap: {},
        description: 'Opportunities linked to the company.',
        icon: 'IconTargetArrow',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.Favorites,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.RELATION,
        name: 'favorites',
        label: 'Favorites',
        targetColumnMap: {},
        description: 'Favorites linked to the company',
        icon: 'IconHeart',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
      {
        id: SeedCompanyFieldMetadataIds.Attachments,
        objectMetadataId: SeedObjectMetadataIds.Company,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.RELATION,
        name: 'attachments',
        label: 'Attachments',
        targetColumnMap: {},
        description: 'Attachments linked to the company.',
        icon: 'IconFileImport',
        isNullable: true,
        isSystem: false,
        defaultValue: undefined,
      },
    ])
    .execute();
};
