import { v4 as uuidv4 } from 'uuid';

export const generateId = (): string => uuidv4().replace(/-/g, '').substring(0, 10);

