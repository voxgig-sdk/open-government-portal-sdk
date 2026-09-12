import { OpenGovernmentPortalEntityBase } from '../OpenGovernmentPortalEntityBase';
import type { OpenGovernmentPortalSDK } from '../OpenGovernmentPortalSDK';
import type { Control } from '../types';
import type { Dataset, DatasetLoadMatch, DatasetListMatch } from '../OpenGovernmentPortalTypes';
declare class DatasetEntity extends OpenGovernmentPortalEntityBase<Dataset> {
    constructor(client: OpenGovernmentPortalSDK, entopts: any);
    make(this: DatasetEntity): DatasetEntity;
    load(this: any, reqmatch?: DatasetLoadMatch, ctrl?: Control): Promise<DatasetEntity>;
    list(this: any, reqmatch?: DatasetListMatch, ctrl?: Control): Promise<DatasetEntity[]>;
}
export { DatasetEntity };
