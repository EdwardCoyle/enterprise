import { DatePicker } from '../../../src/components/datepicker/datepicker';
import { Locale } from '../../../src/components/locale/locale';
import { cleanup } from '../../helpers/func-utils';

require('../../../src/components/locale/cultures/ar-EG.js');
require('../../../src/components/locale/cultures/ar-SA.js');

const datepickerHTML = require('../../../app/views/components/datepicker/example-index.html');
const svg = require('../../../src/components/icons/theme-new-svg.html');

let datepickerEl;
let datepickerAPI;

describe('DatePicker Settings', () => {
  beforeEach(() => {
    datepickerEl = null;
    datepickerAPI = null;
    document.body.insertAdjacentHTML('afterbegin', svg);
    document.body.insertAdjacentHTML('afterbegin', datepickerHTML);
    datepickerEl = document.body.querySelector('.datepicker');

    Locale.addCulture('ar-SA', Soho.Locale.cultures['ar-SA'], Soho.Locale.languages['ar']); //eslint-disable-line
    Locale.addCulture('en-US', Soho.Locale.cultures['en-US'], Soho.Locale.languages['en']); //eslint-disable-line
    Locale.set('en-US');

    datepickerAPI = new DatePicker(datepickerEl);
  });

  afterEach(() => {
    datepickerAPI.destroy();
    cleanup();
  });

  it('Should set settings', () => {
    const settings = {
      showTime: false,
      dateFormat: 'locale', // or can be a specific format
      placeholder: false,
      disable: {
        dates: [],
        minDate: '',
        maxDate: '',
        dayOfWeek: [],
        isEnable: false,
        restrictMonths: false
      },
      showLegend: false,
      showMonthYearPicker: true,
      hideDays: false,
      yearsAhead: 5,
      yearsBack: 4,
      legend: [
        // Legend Build up example
        // Color in level 6 - http://usmvvwdev53:424/controls/colors
        { name: 'Public Holiday', color: '#76B051', dates: [] },
        { name: 'Weekends', color: '#EFA836', dayOfWeek: [] }
      ],
      range: {
        useRange: false, // true - if datepicker using range dates
        start: '', // Start date '03/05/2018'
        end: '', // End date '03/21/2018'
        separator: ' - ', // separator string between two dates
        minDays: 0, // Minimum days
        maxDays: 0, // Maximum days
        selectForward: false, // Only in forward direction
        selectBackward: false, // Only in backward direction
        includeDisabled: false // if true range will include disable dates in it
      },
      calendarName: null,
      useUTC: false
    };

    expect(datepickerAPI.settings.showTime).toEqual(settings.showTime);
    expect(datepickerAPI.settings.timeFormat).toEqual(settings.timeFormat);
    expect(datepickerAPI.settings.placeholder).toEqual(settings.placeholder);
    expect(datepickerAPI.settings.showLegend).toEqual(settings.showLegend);
    expect(datepickerAPI.settings.useUTC).toEqual(settings.useUTC);
  });

  it('Should update set settings via parameter', () => {
    const settings = {
      showTime: true,
      timeFormat: 'HH:mm',
      dateFormat: 'locale', // or can be a specific format
      placeholder: false,
      showLegend: true
    };

    datepickerAPI.updated(settings);

    expect(datepickerAPI.settings.showTime).toEqual(true);
    expect(datepickerAPI.settings.timeFormat).toEqual('HH:mm');
    expect(datepickerAPI.settings.placeholder).toEqual(false);
    expect(datepickerAPI.settings.showLegend).toEqual(true);
  });

  it('should display the trigger icon', (done) => {
    const buttonEl = datepickerEl.nextElementSibling;
    const iconEl = buttonEl.querySelector('.icon');

    expect(buttonEl.classList.contains('trigger')).toBeTruthy();
    expect(iconEl).toBeDefined();
    done();
  });

  it('can modify the `autocomplete` attribute', () => {
    datepickerAPI.updated({ autocompleteAttribute: 'my-date' });

    expect(datepickerAPI.settings.autocompleteAttribute).toEqual('my-date');
    expect(datepickerAPI.element.attr('autocomplete')).toEqual('my-date');
  });
});
