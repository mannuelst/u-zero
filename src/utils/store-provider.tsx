'use client'
import { store } from '@/lib/redux/store'
import { Provider } from 'react-redux'
import { ProviderProp } from './definitions'

export default function StoreProvider({ children }: Readonly<ProviderProp>) {


  return 