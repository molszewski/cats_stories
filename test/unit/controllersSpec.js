'use strict';

/* jasmine specs for controllers go here */

describe('catsApp controllers', function() {
    beforeEach(module('catsApp'));

    describe('Stories Controller', function() {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/stories.json').
            respond([{
                "id": "1",
                "title": "Sample Story",
                "images": [{
                    "caption": "Sample Caption",
                    "path": "img/nina.jpg"
                }]
            }]);

            scope = $rootScope.$new();
            ctrl = $controller('StoriesCtrl', {
                $scope: scope
            });
        }));

        it('should create "stories" model with 1 story', function() {
            expect(scope.stories).toBeUndefined();
            $httpBackend.flush();

            expect(scope.stories.length).toBe(1);
            expect(scope.stories[0].id).toBe('1');
            expect(scope.stories[0].title).toBe("Sample Story");
        });
    });
});
