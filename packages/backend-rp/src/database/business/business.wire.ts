import {userWire} from '@instinct-prj/backend';
import {BusinessEntity} from './business.entity';
import {Business} from '@instinct-prj/interface-rp';

export function businessWire(entity: BusinessEntity): Business {
  return {
    id: entity.id!,
    owner: userWire(entity.user!),
    name: entity.name,
    desc: entity.desc,
    badge: entity.badge,
    positions: entity.positions!.map(_ => ({
      id: _.id!,
      businessID: _.businessID,
      name: _.name,
      employees: [],
      permissions: {
        manager: _.isManager === 1,
        canHire: _.canHire === 1,
        canFire: _.canFire === 1,
        canPromote: _.canPromote === 1,
        canDemote: _.canDemote === 1,
      },
    })),
  };
}