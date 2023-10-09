import {create} from 'zustand';
import { DataResponse } from './types';

export const useStore = create<{
  address: string;
  monthlyBill: number;
  offGrid: boolean;
  solarPotential: DataResponse | null;
}>((set) => ({
  address: '',
  monthlyBill: 0,
  offGrid: false,
  solarPotential: null,
  setSolarPotential: (data:DataResponse) => set((state) => ({solarPotential: data}))
}))
