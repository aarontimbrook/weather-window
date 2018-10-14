// http://cloudmark.github.io/Json-Mapping/
// https://www.npmjs.com/package/reflect-metadata
import * as rm from 'reflect-metadata';

const jsonMetadataKey = 'jsonProperty';

export interface IJsonMetaData<T> {
    name?: string;
    clazz?: { new (): T };
}

export function JsonProperty<T>(metadata?: IJsonMetaData<T> | string): any {
    if (metadata instanceof String || typeof metadata === 'string') {
        return Reflect.metadata(jsonMetadataKey, {
            name: metadata,
            clazz: undefined
        });
    } else {
        const metadataObj = <IJsonMetaData<T>>metadata;
        return Reflect.metadata(jsonMetadataKey, {
            name: metadataObj ? metadataObj.name : undefined,
            clazz: metadataObj ? metadataObj.clazz : undefined
        });
    }
}

// export function getClazz(target: any, propertyKey: string): any {
//     return Reflect.getMetadata('design:type', target, propertyKey);
// }

// export function getJsonProperty<T>(target: any, propertyKey: string): IJsonMetaData<T> {
//     return Reflect.getMetadata(jsonMetadataKey, target, propertyKey);
// }

export class MapUtils {
    static isPrimitive(obj) {
        switch (typeof obj) {
            case 'string':
            case 'number':
            case 'boolean':
                return true;
        }
        return !!(
            obj instanceof String ||
            obj === String ||
            obj instanceof Number ||
            obj === Number ||
            obj instanceof Boolean ||
            obj === Boolean
        );
    }

    static isArray(object) {
        if (object === Array) {
            return true;
        } else if (typeof Array.isArray === 'function') {
            return Array.isArray(object);
        } else {
            return !!(object instanceof Array);
        }
    }

    static getJsonProperty<T>(target: any, propertyKey: string): IJsonMetaData<T> {
        return Reflect.getMetadata(jsonMetadataKey, target, propertyKey);
    }

    static getClazz(target: any, propertyKey: string): any {
        return Reflect.getMetadata('design:type', target, propertyKey);
    }

    static deserialize<T>(clazz: { new (): T }, jsonObject) {
        if (clazz === undefined || jsonObject === undefined) {
            return undefined;
        }

        const obj = new clazz();

        Object.keys(obj)
              .forEach(key => {
            const propertyMetadataFn: (IJsonMetaData) => any = propertyMetadata0 => {
                const propertyName = propertyMetadata0.name || key;
                const innerJson = jsonObject ? jsonObject[propertyName] : undefined;
                const clazz0 = MapUtils.getClazz(obj, key);

                if (MapUtils.isArray(clazz0)) {
                    const metadata = MapUtils.getJsonProperty(obj, key);

                    if (metadata.clazz || MapUtils.isPrimitive(clazz0)) {
                        if (innerJson && MapUtils.isArray(innerJson)) {
                            const metadataClazz = metadata.clazz;
                            // this is an Array<string>
                            if (metadataClazz.name === 'String') {
                                return innerJson;
                            } else {
                                // this is a complex object
                                return innerJson.map(item => MapUtils.deserialize(metadata.clazz, item));
                            }
                        } else {
                            return undefined;
                        }
                    } else {
                        return innerJson;
                    }
                } else if (!MapUtils.isPrimitive(clazz0)) {
                    return MapUtils.deserialize(clazz0, innerJson);
                } else {
                    return jsonObject ? jsonObject[propertyName] : undefined;
                }
            };

            const propertyMetadata = MapUtils.getJsonProperty(obj, key);

            if (propertyMetadata) {
                obj[key] = propertyMetadataFn(propertyMetadata);
            } else {
                if (jsonObject && jsonObject[key] !== undefined) {
                    obj[key] = jsonObject[key];
                }
            }
        });

        return obj;
    }
}
