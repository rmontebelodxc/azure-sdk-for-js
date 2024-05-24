/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ImportJob,
  ImportJobsListByAmlFilesystemOptionalParams,
  ImportJobsDeleteOptionalParams,
  ImportJobsDeleteResponse,
  ImportJobsGetOptionalParams,
  ImportJobsGetResponse,
  ImportJobsCreateOrUpdateOptionalParams,
  ImportJobsCreateOrUpdateResponse,
  ImportJobUpdate,
  ImportJobsUpdateOptionalParams,
  ImportJobsUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ImportJobs. */
export interface ImportJobs {
  /**
   * Returns all import jobs the user has access to under an AML File System.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param amlFilesystemName Name for the AML file system. Allows alphanumerics, underscores, and
   *                          hyphens. Start and end with alphanumeric.
   * @param options The options parameters.
   */
  listByAmlFilesystem(
    resourceGroupName: string,
    amlFilesystemName: string,
    options?: ImportJobsListByAmlFilesystemOptionalParams,
  ): PagedAsyncIterableIterator<ImportJob>;
  /**
   * Schedules an import job for deletion.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param amlFilesystemName Name for the AML file system. Allows alphanumerics, underscores, and
   *                          hyphens. Start and end with alphanumeric.
   * @param importJobName Name for the import job. Allows alphanumerics, underscores, and hyphens. Start
   *                      and end with alphanumeric.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    amlFilesystemName: string,
    importJobName: string,
    options?: ImportJobsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ImportJobsDeleteResponse>,
      ImportJobsDeleteResponse
    >
  >;
  /**
   * Schedules an import job for deletion.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param amlFilesystemName Name for the AML file system. Allows alphanumerics, underscores, and
   *                          hyphens. Start and end with alphanumeric.
   * @param importJobName Name for the import job. Allows alphanumerics, underscores, and hyphens. Start
   *                      and end with alphanumeric.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    amlFilesystemName: string,
    importJobName: string,
    options?: ImportJobsDeleteOptionalParams,
  ): Promise<ImportJobsDeleteResponse>;
  /**
   * Returns an import job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param amlFilesystemName Name for the AML file system. Allows alphanumerics, underscores, and
   *                          hyphens. Start and end with alphanumeric.
   * @param importJobName Name for the import job. Allows alphanumerics, underscores, and hyphens. Start
   *                      and end with alphanumeric.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    amlFilesystemName: string,
    importJobName: string,
    options?: ImportJobsGetOptionalParams,
  ): Promise<ImportJobsGetResponse>;
  /**
   * Create or update an import job. Import jobs are automatically deleted 72 hours after completion.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param amlFilesystemName Name for the AML file system. Allows alphanumerics, underscores, and
   *                          hyphens. Start and end with alphanumeric.
   * @param importJobName Name for the import job. Allows alphanumerics, underscores, and hyphens. Start
   *                      and end with alphanumeric.
   * @param importJob Object containing the user-selectable properties of the import job. If read-only
   *                  properties are included, they must match the existing values of those properties.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    amlFilesystemName: string,
    importJobName: string,
    importJob: ImportJob,
    options?: ImportJobsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ImportJobsCreateOrUpdateResponse>,
      ImportJobsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update an import job. Import jobs are automatically deleted 72 hours after completion.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param amlFilesystemName Name for the AML file system. Allows alphanumerics, underscores, and
   *                          hyphens. Start and end with alphanumeric.
   * @param importJobName Name for the import job. Allows alphanumerics, underscores, and hyphens. Start
   *                      and end with alphanumeric.
   * @param importJob Object containing the user-selectable properties of the import job. If read-only
   *                  properties are included, they must match the existing values of those properties.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    amlFilesystemName: string,
    importJobName: string,
    importJob: ImportJob,
    options?: ImportJobsCreateOrUpdateOptionalParams,
  ): Promise<ImportJobsCreateOrUpdateResponse>;
  /**
   * Update an import job instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param amlFilesystemName Name for the AML file system. Allows alphanumerics, underscores, and
   *                          hyphens. Start and end with alphanumeric.
   * @param importJobName Name for the import job. Allows alphanumerics, underscores, and hyphens. Start
   *                      and end with alphanumeric.
   * @param importJob Object containing the user-selectable properties of the import job. If read-only
   *                  properties are included, they must match the existing values of those properties.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    amlFilesystemName: string,
    importJobName: string,
    importJob: ImportJobUpdate,
    options?: ImportJobsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ImportJobsUpdateResponse>,
      ImportJobsUpdateResponse
    >
  >;
  /**
   * Update an import job instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param amlFilesystemName Name for the AML file system. Allows alphanumerics, underscores, and
   *                          hyphens. Start and end with alphanumeric.
   * @param importJobName Name for the import job. Allows alphanumerics, underscores, and hyphens. Start
   *                      and end with alphanumeric.
   * @param importJob Object containing the user-selectable properties of the import job. If read-only
   *                  properties are included, they must match the existing values of those properties.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    amlFilesystemName: string,
    importJobName: string,
    importJob: ImportJobUpdate,
    options?: ImportJobsUpdateOptionalParams,
  ): Promise<ImportJobsUpdateResponse>;
}
