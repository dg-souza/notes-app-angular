import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    private storage: Storage

    constructor() {
        this.storage = window.localStorage
    }

    set(key: string, value: Array<string>) {
        this.storage.setItem(key, JSON.stringify(value))
    }

    get(key: string): any {
        if(this.storage) {
            return JSON.parse(this.storage.getItem(key) || '{}')
        }

        return null
    }
}