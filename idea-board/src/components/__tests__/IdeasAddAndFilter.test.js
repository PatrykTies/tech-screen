import React from 'react';
import { mount } from 'enzyme';
import IdeasAddAndFilter from 'components/IdeasAddAndFilter';
import IdeasList from 'components/IdeasList';
import Root from 'Root'


describe('IdeasAddAndFilter component', ()=>{
    

    describe('UI elements in IdeasAddAndFilter', () => {
        let wrappedComponent;
        beforeEach(() => {
            wrappedComponent = mount(
            <Root>
                <IdeasAddAndFilter />
            </Root>);
        });

        afterEach(() => {
            wrappedComponent.unmount();
        });

        it('has one FAB button at first render', () => {
            expect(wrappedComponent.find('button').length).toEqual(1)
        });
    });

    describe('FAB button in IdeasAddAndFilter', ()=>{
        let wrappedComponent;
        beforeEach(() => {
            wrappedComponent = mount(
                <Root>
                    <IdeasAddAndFilter />
                    <IdeasList />
                </Root>
            );
        });

        afterEach(() => {
            wrappedComponent.unmount();
        });
        it('when FAB is pressed onClick event fire with toggleMenu()', ()=>{
            expect(wrappedComponent.find('button.fab fab-icon-menu').length).toEqual(1)
            wrappedComponent.find('button.fab fab-icon-menu').simulate('click')
            expect(wrappedComponent.find('button').length).toEqual(5)
        });
    });
});

