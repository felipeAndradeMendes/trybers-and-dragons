export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  readonly type_: EnergyType;
  readonly amount: number;
}
