import { createDerived } from 'nanostores'

import {catalog} from "../catalog"

export const catalogHome = createDerived(catalog, list =>
  list.filter(item => item.isMain)
)