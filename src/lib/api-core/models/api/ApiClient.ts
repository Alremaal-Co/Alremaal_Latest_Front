/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AuthenticationService } from './services/AuthenticationService';
import { ColumnManagerService } from './services/ColumnManagerService';
import { DynamicDataOperationsService } from './services/DynamicDataOperationsService';
import { ProfileService } from './services/ProfileService';
import { TableManagerService } from './services/TableManagerService';
import { UsersManagementAdminService } from './services/UsersManagementAdminService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ApiClient {
    public readonly authentication: AuthenticationService;
    public readonly columnManager: ColumnManagerService;
    public readonly dynamicDataOperations: DynamicDataOperationsService;
    public readonly profile: ProfileService;
    public readonly tableManager: TableManagerService;
    public readonly usersManagementAdmin: UsersManagementAdminService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.authentication = new AuthenticationService(this.request);
        this.columnManager = new ColumnManagerService(this.request);
        this.dynamicDataOperations = new DynamicDataOperationsService(this.request);
        this.profile = new ProfileService(this.request);
        this.tableManager = new TableManagerService(this.request);
        this.usersManagementAdmin = new UsersManagementAdminService(this.request);
    }
}

