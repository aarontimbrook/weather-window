import { TestBed } from '@angular/core/testing';

import { XmlParseService } from './xml-parse.service';

describe('XmlParseServiceService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: XmlParseService = TestBed.get(XmlParseService);
        expect(service)
            .toBeTruthy();
    });
});
