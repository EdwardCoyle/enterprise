(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/fi-FI', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('fi-FI', {
    //layout/language
    language: 'fi',
    englishName: 'Finnish (Finland)',
    nativeName: 'suomi (Suomi)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '.', //Infered
                   'timeSeparator': ':',
                   'short': 'd.M.yyyy', //use four digit year
                   'medium': 'd.M.yyyy',
                   'long': 'd. MMMM yyyy',
                   'full': 'EEEE d. MMMM yyyyy',
                   'month': 'd. MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'H:mm:ss',
                   'datetime': 'd.M.y H:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina'],
         abbreviated: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
         narrow: ['S', 'M', 'T', 'K', 'T', 'P', 'L']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'],
        abbreviated: ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'H:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['ap.', 'ip.']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '€', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: ',',
      group: ' '
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Copyright &copy; {0} Infor. Kaikki oikeudet pidätetään. Tässä esitetyt sanamerkit ja suunnittelumerkit ovat Inforin ja/tai sen konserniyhtiöiden tavaramerkkejä ja/tai rekisteröityjä tavaramerkkejä. Kaikki muut tässä esitetyt tavaramerkit ovat omistajiensa omaisuutta'},
      'Actions': {id: 'Actions', value: 'Toiminnot', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Lisää', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Luo tarkennettu suodatin', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Hälytys', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'Kaikki tulokset kohteelle', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Tasaa alareunaan', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Tasaa keskikohdat vaakasuunnassa', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Kullanruskea', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Violetti', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Käytä', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Liitä', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Taivaansininen', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'Välillä', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Sisennetty lainaus', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Lihavoi', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Tallennettu kirjanmerkkeihin', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Tallenna tämä kirjanmerkkeihin', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Navigointipolku', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Luettelomerkeillä varustettu luettelo', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Kalenteri', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Kamera', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Peruuta', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Caps Lock päällä', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Ostoskärry', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Keskitä', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Merkkejä jäljellä ', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Merkkimäärä enintään ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. Vaihda valinta nuolinäppäimillä.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Valintaruutu', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Valittu', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Tyhjennä', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'Kello', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Sulje', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Kopioi', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Pienennä', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Pienennä sovellustarjotin', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Sarakkeet', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'Kirjoita', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Valmis', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Vahvista', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Sisältää', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'Leikkaa', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Päivämäärä', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Poista', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Jaa vaakasuunnassa', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Asiakirja', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'Poraudu alirakenteeseen', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Poraudu ylärakenteeseen', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Avattava', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Ei sisällä', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Ei ole yhtä suuri kuin', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'Alas', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Lataa', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Kaksoiskappale', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Joko valittu tai ei valittu', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Kirjoita kommentit tähän...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Virhe', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'Sähköpostiosoite ei ole kelvollinen', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Smaragdinvihreä', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Laajenna', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Laajenna sovellustarjotin', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Laajenna/pienennä', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Vie laskentataulukkona', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Muokkaa', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Yhtä suuri kuin', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Poistu täydestä näkymästä', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Vie', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'Tiedoston lataaminen palvelimelle: selaa tiedostoja painamalla Enter-näppäintä', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Suodata', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Ensimmäinen sivu', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Kansio', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Koko näytön näkymä', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Siirry eteenpäin', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Palaa takaisin', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Siirry alaspäin', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Siirry ylöspäin', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Grafiitinharmaa', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Suurempi tai yhtä suuri kuin', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Suurempi kuin', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Ruudukko', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Tuntia', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Otsikko kolme', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Otsikko neljä', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Korkein', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Aloitus', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'HTML-näkymä', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'Tuo', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Tiedot', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Lisää ankkuri', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Lisää kuva', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'Kursivoi', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Väärä päivämäärä', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'Varasto', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'On tyhjä', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Ei ole tyhjä', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Tasaa keskelle', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Tasaa vasemmalle', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Tasaa oikealle', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Avainsana', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Käynnistä', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Viimeinen sivu', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Vasen', comment: 'Left tooltip'},
      'LeftAlign': {id: 'LeftAlign', value: 'Tasaus vasemmalle', comment: 'Left Align tooltip'},
      'LeftTextAlign': {id: 'LeftTextAlign', value: 'Tekstin tasaus vasemmalle', comment: 'Left Text Align tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Pienempi tai yhtä suuri kuin', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Pienempi kuin', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Linkki', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Lataa', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Ladataan', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Lukittu', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'Haku', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Alin', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Sähköposti', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Kiinnitä karttaan', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Suurenna', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Mediaani', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Keskikokoinen', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Valikko', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Jaa Ming.lellä', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Minuuttia', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Pienennä', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Miinus', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'Lisää...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Lisää toimintoja', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', Muokattu', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. Multiselect with ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'Uusi asiakirja', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'Seuraava', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Seuraava sivu', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Seuraava kuukausi', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'Ei tuloksia', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'Huomautukset', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Ei valittu', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Numeroluettelo', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Avaa/takaisin/sulje', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Avaa/sulje', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Järjestetty luettelo', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'sivu ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Sivu {0}/{1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Olet tällä hetkellä sivulla ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Liitä', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<div class="password-Tooltip"><strong>Salasanan vaatimukset:</strong><ul><li>Vähintään 10 merkkiä pitkä</li><li>Vähintään yksi iso kirjain</li><li>Vähintään yksi pieni kirjain</li><li><strong>Vähintään yksi erikoismerkki</strong></li><li>Ei saa sisältää käyttäjätunnustasi</li><li>Ei voi olla aiemmin käytetty salasana</li></ul></div>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Salasanan on täsmättävä', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Huippu', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Mukauta sarakkeet', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Jakso', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Valitse päivämäärä painamalla alaspäin', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Avaa pikavalikko painamalla Shift+F10', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Edellinen', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Edellinen kuukausi', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Edellinen sivu', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Tulosta', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Vaihteluväli', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} tietuetta sivulla', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Toista', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Päivitä', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Pakollinen', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Nollaa', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'Tulokset', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'Oikea', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'Tasaus oikealle', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Tekstin tasaus oikealle', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'Roolit', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Rivikorkeus', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Rubiininpunainen', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'Tallenna', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Tallenna nykyinen näkymä', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Tallennetut näkymät', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'Haku', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'Hae kansiosta', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Hae luettelosta', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'Valittu', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Lähetä', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Aseta aika', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Asetukset', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Matala', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'Siniharmaa', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Kahva kohteelle', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Kahvan maksimiarvo kohteelle', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Kahvan minimiarvo kohteelle', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Siirry pääsisältöön', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Yliviivaus', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Lajittele A–Ö', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Lajittele Ö–A', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Lajittele alaspäin', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Lajittele ylöspäin', comment: 'Sort Up tooltip'},
      'StarFilled': {id: 'StarFilled', value: 'Star Filled', comment: 'Star Filled tooltip'},
      'StarHalf': {id: 'StarHalf', value: 'Star Half', comment: 'Star Half tooltip'},
      'StarOutlined': {id: 'StarOutlined', value: 'Star Outlined', comment: 'Star Outlined tooltip'},
      'Subscript': {id: 'Subscript', value: 'Alaindeksi', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Yläindeksi', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'Nasta', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'Korkea', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'Ajastin', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Tänään', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Lihavointi päälle / pois päältä', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Otsikko 3 päälle / pois päältä', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Otsikko 4 päälle / pois päältä', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Kursivointi päälle / pois päältä', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Alleviivaus päälle / pois päältä', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Työkalurivi', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Tasaus yläreunaan', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Yhteensä', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Pienennä puu', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Laajenna puu', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Turkoosi', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Ylös', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Lataa palvelimelle', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Ei käytettävissä oleva päivämäärä', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Alleviivaa', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Kumoa', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Lukitsematon', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Järjestämätön luettelo', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Tämä sisältö ei ole saatavilla, koska se käyttää ominaisuuksia, joita nykyinen selainversiosi ei tue.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Valitse nuolinäppäimillä.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Hae käyttämällä Enter-näppäintä tai alanuolta.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Käyttäjä', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Käyttäjäprofiili', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Tasaa keskikohdat pystysuunnassa', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Näytä lähde', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Näytä visuaalinen', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
