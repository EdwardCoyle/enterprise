(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/hu-HU', ['jquery'], factory);
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
  Locale.addCulture('hu-HU', {
    //layout/language
    language: 'hu',
    englishName: 'Hungarian (Hungary)',
    nativeName: 'magyar (Magyarország)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': ':',
                   'short': 'yyyy. MM. dd.', //use four digit year
                   'medium': 'yyyy. MMM d.',
                   'long': 'yyyy. MMMM d.',
                   'full': 'yyyy. MMMM d., EEEE',
                   'month': 'MMMM d.',
                   'year': 'yyyy. MMMM',
                   'timestamp': 'H:mm:ss',
                   'datetime': 'yyyy. MM. dd. H:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
         abbreviated: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
         narrow: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
        abbreviated: ['jan.','febr.','márc.','ápr.','máj.','jún.','júl.','aug.','szept.','okt.','nov.','dec.']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'H:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['de.', 'du.']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: 'Ft', //(Replace Sign http://www.currencysymbols.in ?)
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
      'AboutText': {id: 'AboutText', value: 'Copyright &copy; {0} Infor. Minden jog fenntartva. Az itt felsorolt szó- és ábrás védjegyek az Infor és/vagy kapcsolt vállalkozásainak és leányvállalatainak védjegyei és/vagy bejegyzett védjegyei. Minden jog fenntartva. Minden más felsorolt védjegy a védjegytulajdonos tulajdonát képezi.'},
      'Actions': {id: 'Actions', value: 'Műveletek', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Hozzáadás', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Irányított szűrő létrehozása', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Figyelmeztetés', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'Minden találat erre:', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Alulra igazítás', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Középre igazítás vízszintesen', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Borostyánsárga', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Ametisztlila', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Alkalmazás', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Csatolás', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Azúrkék', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'Között', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Idézetblokk', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Félkövér', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Könyvjelzővel jelölt', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Könyvjelzővel jelölés', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Útkövetés', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Listajeles felsorolás', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Naptár', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Kamera', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Mégse', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Caps Lock bekapcsolva', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Kosár', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Középre', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Felhasználható karakterek száma: ', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Maximális karakterszám: ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. A kiválasztást a nyílbillentyűkkel módosíthatja.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Jelölőnégyzet', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Bejelölve', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Törlés', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'Óra', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Bezárás', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Másolás', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Összecsukás', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Alkalmazástálca összecsukása', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Oszlopok', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'Létrehozás', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Teljesítve', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Megerősítés', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Tartalmazza', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'Kivágás', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Dátum', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Törlés', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Elosztás vízszintesen', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Dokumentum', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'Lefúrás', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Felfúrás', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Legördülő', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Nem tartalmazza', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Nem egyenlő', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'Le', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Letöltés', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Duplikátum', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Kiválasztott vagy nem kiválasztott', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Írja ide a megjegyzéseket…', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Hiba', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'Érvénytelen e-mail cím', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Smaragdzöld', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Kibontás', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Alkalmazástálca kibontása', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Kibontás/összecsukás', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Exportálás táblázatként', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Szerkesztés', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Egyenlő', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Kilépés a teljes nézetből', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Exportálás', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'Fájlfeltöltés: az Enter billentyűt megnyomva tallózással megkeresheti a kívánt fájlt', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Szűrés', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Első oldal', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Mappa', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Teljes nézet', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Előre', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Vissza', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Lefelé', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Felfelé', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Grafitszürke', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Nagyobb, vagy egyenlő', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Nagyobb, mint', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Rács', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Óra', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Harmadik címsor', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Negyedik címsor', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Legnagyobb', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Kezdőlap', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'HTML nézet', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'Importálás', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Információ', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Horgony beszúrása', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Kép beszúrása', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'Dőlt', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Érvénytelen dátum', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'Készlet', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Üres', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Nem üres', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Középre zárás', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Balra zárás', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Jobbra zárás', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Kulcsszó', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Indítás', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Utolsó oldal', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Balra', comment: 'Left tooltip'},
      'LeftAlign': {id: 'LeftAlign', value: 'Balra igazítás', comment: 'Left Align tooltip'},
      'LeftTextAlign': {id: 'LeftTextAlign', value: 'Szöveg balra igazítása', comment: 'Left Text Align tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Kisebb, vagy egyenlő', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Kisebb, mint', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Hivatkozás', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Betöltés', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Betöltés', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Zárolt', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'Keresés', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Legkisebb', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Levél', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Jelölő', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Teljes méretűvé tesz', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Medián', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Közepes', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Menü', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Megosztás a Ming.le-ben', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Perc', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Kis méretűvé tesz', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Mínusz', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'Tovább...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'További műveletek', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', módosítva', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. Multiselect with ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'Új dokumentum', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'Következő', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Következő oldal', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Következő hónap', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'Nincs eredmény', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'Jegyzetek', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Nem kiválasztott', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Számozott lista', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Megnyitás / Vissza / Bezárás', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Megnyitás / Bezárás', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Rendezett lista', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'oldal ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: '{0}./{1} oldal', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Jelenleg ezen az oldalon van: ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Beszúrás', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<div class="password-Tooltip"><strong>A jelszó:</strong><ul><li>legalább 10 karakterből álljon,</li><li>tartalmazzon legalább egy nagybetűt,</li><li>tartalmazzon legalább egy kisbetűt,</li><li><strong>tartalmazzon legalább egy speciális karaktert,</strong></li><li>nem tartalmazhatja a felhasználónevet,</li><li>nem lehet korábban már használt jelszó.</li></ul></div>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'A jelszónak és a jelszó megerősítésének egyeznie kell', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Csúcsérték', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Oszlopok testreszabása', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Napszak', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'A dátum kiválasztásához nyomja meg a lefelé mutató nyilat', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'A helyi menü megnyitásához nyomja meg a Shift+F10 billentyűkombinációt.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Előző', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Előző hónap', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Előző oldal', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Nyomtatás', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Tartomány', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} rekord oldalanként', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Mégis', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Frissítés', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Kötelező', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Visszaállítás', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'Eredmények', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'Jobbra', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'Jobbra igazítás', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Szöveg jobbra igazítása', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'Szerepek', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Sormagasság', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Rubinvörös', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'Mentés', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Aktuális nézet mentése', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Nézetek mentése', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'Keresés', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'Keresés mappában', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Keresés listán', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'Kiválasztva', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Küldés', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Idő beállítása', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Beállítások', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Rövid', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'Palaszürke', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Leíró ehhez:', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'A maximális tartományérték leírója ennél:', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'A minimális tartományérték leírója ennél:', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Ugrás a fő tartalomra', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Áthúzás', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Betűrendbe rendezés', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Fordított betűrendbe rendezés', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Csökkenő sorrendbe rendezés', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Növekvő sorrendbe rendezés', comment: 'Sort Up tooltip'},
      'StarFilled': {id: 'StarFilled', value: 'Star Filled', comment: 'Star Filled tooltip'},
      'StarHalf': {id: 'StarHalf', value: 'Star Half', comment: 'Star Half tooltip'},
      'StarOutlined': {id: 'StarOutlined', value: 'Star Outlined', comment: 'Star Outlined tooltip'},
      'Subscript': {id: 'Subscript', value: 'Alsó index', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Felső index', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'Jelölő', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'Magas', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'Időzítő', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Ma', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Szöveg félkövérré alakítása', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: '3. címsor ki-/bekapcsolása', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: '4. címsor ki-/bekapcsolása', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Szöveg dőltté alakítása', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Szöveg aláhúzottá alakítása', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Eszköztár', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Fentre igazítás', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Összesen', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Fa összecsukása', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Fa kibontása', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Türkiz', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Fel', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Feltöltés', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Nem használható dátum', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Aláhúzás', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Visszavonás', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Zárolatlan', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Rendezetlen lista', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Ez a tartalom nem érhető el, mivel a jelenleg használt böngészőverzió által nem támogatott funkciókat tartalmaz.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. A kiválasztáshoz használja a nyílbillentyűket.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. A kereséshez nyomja meg az Enter vagy a lefelé mutató nyílbillentyűt.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Felhasználó', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Felhasználói profil', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Középre igazítás függőlegesen', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Forrás megtekintése', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Vizuális nézet megtekintése', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
