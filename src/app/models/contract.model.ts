import { ItemGroup } from 'app/models/item-group.model';

export class Contract {
    createdAt: number;
    contractLength: number;
    /**
     * @argument number be either allianceId, corporationId or characterId
     */
    contractorId: number;
    contractorName: string;
    privacy: 'alliance' | 'corporation' | 'private';
    type: 'buy' | 'courrier'
    fromSystemId: number;
    toSystemId: number;
    itemGroups: ItemGroup[];
}
