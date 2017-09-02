import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: 'Zilcho' },
            { id: 11, name: 'Eel Girl' },
            { id: 12, name: 'Duck Duck Grey Duck' },
            { id: 13, name: 'Kabbage Kreature' },
            { id: 14, name: 'Radiation Guy' },
            { id: 15, name: 'The Five O\'Clock Shadow' },
            { id: 16, name: 'Dinosauria' },
            { id: 17, name: 'The Plebotomist' },
            { id: 18, name: 'Cruella McGill' },
            { id: 19, name: 'Cap\'n Crunch' },
            { id: 20, name: 'The Landlady' }
        ];
        return {heroes}; 
    }
}