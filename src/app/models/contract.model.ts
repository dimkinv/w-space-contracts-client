import { ItemGroup } from 'app/models/item-group.model';

export interface Contract {
    _id: string;
    started_at: number;
    contract_length: number;
    /**
     * @argument number be either allianceId, corporationId or characterId
     */
    from_id: number;
    from_name: string;
    to_id: number;
    to_name: string;
    privacy: 'alliance' | 'corporation' | 'private';
    type: 'buy' | 'courrier'
    from_system_id: number;
    to_system_id: number;
    from_system_name: string;
    to_system_name: string;
    total_price: number;
    items: Item[]
}

export interface Item {
    id: number;
    name: string;
    amount: number;
}
