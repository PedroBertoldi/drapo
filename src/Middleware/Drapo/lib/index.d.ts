declare class DrapoApplication {
    private _isLoaded;
    private _logger;
    private _router;
    private _server;
    private _observer;
    private _document;
    private _controlFlow;
    private _parser;
    private _storage;
    private _solver;
    private _binder;
    private _config;
    private _register;
    private _serializer;
    private _barber;
    private _modelHandler;
    private _attributeHandler;
    private _classHandler;
    private _eventHandler;
    private _functionHandler;
    private _componentHandler;
    private _cookieHandler;
    private _sectorContainerHandler;
    private _windowHandler;
    private _behaviorHandler;
    private _plumber;
    private _formatter;
    private _validator;
    private _exceptionHandler;
    private _globalization;
    private _stylist;
    private _viewportHandler;
    private _debugger;
    get IsLoaded(): boolean;
    get Log(): DrapoLogger;
    get Router(): DrapoRouter;
    get Server(): DrapoServer;
    get Observer(): DrapoObserver;
    get Document(): DrapoDocument;
    get ControlFlow(): DrapoControlFlow;
    get Parser(): DrapoParser;
    get Storage(): DrapoStorage;
    get Solver(): DrapoSolver;
    get Binder(): DrapoBinder;
    get Config(): DrapoConfig;
    get Register(): DrapoRegister;
    get Serializer(): DrapoSerializer;
    get Barber(): DrapoBarber;
    get ModelHandler(): DrapoModelHandler;
    get AttributeHandler(): DrapoAttributeHandler;
    get ClassHandler(): DrapoClassHandler;
    get EventHandler(): DrapoEventHandler;
    get FunctionHandler(): DrapoFunctionHandler;
    get ComponentHandler(): DrapoComponentHandler;
    get CookieHandler(): DrapoCookieHandler;
    get SectorContainerHandler(): DrapoSectorContainerHandler;
    get WindowHandler(): DrapoWindowHandler;
    get BehaviorHandler(): DrapoBehaviorHandler;
    get Plumber(): DrapoPlumber;
    get Formatter(): DrapoFormatter;
    get Validator(): DrapoValidator;
    get ExceptionHandler(): DrapoExceptionHandler;
    get Globalization(): DrapoGlobalization;
    get Stylist(): DrapoStylist;
    get ViewportHandler(): DrapoViewportHandler;
    get Debugger(): DrapoDebugger;
    constructor();
    OnLoad(): Promise<void>;
    show(): string;
    close(): string;
}

declare class DrapoAttributeHandler {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    HasContentIDContext(content: string): boolean;
    HasContentAttributeContext(content: string): boolean;
    ResolveAttr(el: HTMLElement, canBind?: boolean, canSubscribeDelay?: boolean, dataKeyFilter?: string, dataFieldFilter?: string): Promise<void>;
    ResolveAttrContext(context: DrapoContext, el: HTMLElement, elj: JQuery, canBind: boolean): Promise<void>;
    private ResolveContextValue;
    private ExtractAttr;
    private ExtractAttrProperty;
    ResolveID(el: HTMLElement, sector: string, canBind?: boolean, canSubscribeDelay?: boolean, dataKeyFilter?: string, dataFieldFilter?: string): Promise<void>;
    ResolveIDContext(context: DrapoContext, el: HTMLElement, elj: JQuery, sector: string, canBind: boolean): Promise<boolean>;
    private ResolveConversionAttributeValue;
    private ResolveConversionAttributeSourceValue;
}

declare class DrapoBarber {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    HasContentMustacheNodesContext(content: string): boolean;
    HasContentMustacheAttributeContext(content: string): boolean;
    private HasContentMustacheAttributeContextMustache;
    ResolveMustaches(jQueryStart?: JQuery, sector?: string, stopAtSectors?: boolean): Promise<void>;
    private ResolveMustachesInternal;
    ResolveFilter(el: HTMLElement, sector: string, canBind: boolean, dataKeyFilter: string, dataFieldFilter: string): Promise<void>;
    ResolveElementDelayed(el: HTMLElement, sector: string, dataKeyFilter?: string, dataFieldFilter?: string): Promise<void>;
    ResolveMustacheElementLeaf(el: HTMLElement, canUseModel?: boolean, canSubscribeDelay?: boolean, dataKeyFilter?: string, dataFieldFilter?: string): Promise<void>;
    ResolveModel(el: HTMLElement, canBind?: boolean, canSubscribeDelay?: boolean, dataKeyFilter?: string, dataFieldFilter?: string): Promise<void>;
    ResolveControlFlowMustacheAttributes(context: DrapoContext, elementJQuery: JQuery, sector: string): Promise<void>;
    ResolveControlFlowMustacheNodes(context: DrapoContext, element: HTMLElement, elementJQuery: JQuery, sector: string): Promise<void>;
    ResolveControlFlowMustacheAttribute(context: DrapoContext, attribute: string, elementJQuery: JQuery, sector: string): Promise<void>;
    ResolveControlFlowMustacheStringFunction(sector: string, context: DrapoContext, renderContext: DrapoRenderContext, expression: string, elementJQuery: JQuery, canBind?: boolean, type?: DrapoStorageLinkType): Promise<string>;
    ResolveControlFlowMustacheString(context: DrapoContext, renderContext: DrapoRenderContext, expression: string, elementJQuery: JQuery, sector: string, canBind?: boolean, type?: DrapoStorageLinkType, isForIterator?: boolean, elementForTemplate?: HTMLElement): Promise<string>;
    ResolveMustacheElementVisibility(el: HTMLElement, canBind?: boolean): Promise<void>;
    HasMustacheContext(expression: string, sector: string, renderContext?: DrapoRenderContext): Promise<boolean>;
    ResolveCloak(el: HTMLElement, canBind?: boolean): Promise<void>;
}

declare class DrapoBehaviorHandler {
    private _application;
    private _drag;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    HasContentBehaviorContext(content: string): boolean;
    ResolveBehavior(el: HTMLElement, canBind?: boolean, canSubscribeDelay?: boolean, dataKeyFilter?: string, dataFieldFilter?: string): Promise<void>;
    ResolveBehaviorContext(context: DrapoContext, element: HTMLElement, canBind: boolean): Promise<void>;
    private ResolveBehaviorDragStart;
    private ResolveBehaviorDragEnd;
    private ResolveBehaviorDragStartContext;
    private ResolveBehaviorDragEndContext;
    ResolveBehaviorDragEndDrop(e: any, item: DrapoContextItem, tags: string[], notify: boolean, dataKey: string, sector: string, onBefore: string, onAfter: string): Promise<void>;
    ResolveBehaviorDragStartOnBefore(dragBefore: DrapoDrag, dragAfter: DrapoDrag): Promise<void>;
    ResolveBehaviorDragEndOnAfter(dragBefore: DrapoDrag, dragAfter: DrapoDrag): Promise<void>;
    GetDrag(): DrapoDrag;
    SetDrag(drag: DrapoDrag): void;
    private IsDragMatch;
    private CreateDrag;
    private IsMoveDrag;
    private MoveDrag;
    private IsInternalDrag;
    private IsSwapDrag;
    private SwapDrag;
    private IsCustomDrag;
    private CustomDrag;
    private ResolveBehaviorResizeContext;
    ResolveBehaviorResize(el: HTMLElement, canBind?: boolean, canSubscribeDelay?: boolean, dataKeyFilter?: string, dataFieldFilter?: string): Promise<void>;
    private ResolveBehaviorResizeInternal;
    private CreateResize;
    private ResolveBehaviorResizeStart;
    private ResolveBehaviorResizeContinue;
    private ResolveBehaviorResizeFinish;
    private GetSize;
    private GetSizeUnit;
    private IsClassBootstrap;
    private CreateClassBootstrap;
    private EndsWith;
    private GetSizeValue;
    private GetSizeStartWithOffset;
    private GetResizerOffset;
    private GetResizerEventValue;
    private ApplySizeNew;
}

/// <reference path="../typings/index.d.ts" />
declare class DrapoBinder {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    BindReaderWriter(contextItem: DrapoContextItem, el: HTMLElement, dataFields: string[], eventTypes: string[], eventTypesCancel?: string[]): void;
    BindReader(contextItem: DrapoContextItem, el: HTMLElement, dataFields: string[]): void;
    BindWriter(contextItem: DrapoContextItem, el: HTMLElement, dataFields: string[], eventTypes: string[], eventTypesCancel: string[]): void;
    BindWriterEvent(e: JQueryEventObject, eventType: string, eventFilter: string, contextItem: DrapoContextItem, el: HTMLElement, dataFields: string[], data: any, dataKey: string, index: number): Promise<boolean>;
    BindIncremental(elj: JQuery, dataKey: string, sector: string, isIncremental: boolean): Promise<void>;
    BindIncrementalScroll(binder: JQuery, eventNamespace: string, eljParent: JQuery, dataKey: string, sector: string): Promise<boolean>;
    private GetEventValue;
    private GetEventValueInput;
    private GetParentElementWithScrollVertical;
    private IsElementScrollVisible;
    private HasElementVerticalScroll;
    IsElementScrollVerticalAlmostEnd(el: JQuery): boolean;
    UnbindControlFlowViewport(viewport: DrapoViewport): void;
    BindControlFlowViewport(viewport: DrapoViewport): void;
    BindControlFlowViewportScroll(viewport: DrapoViewport): Promise<void>;
}

declare class DrapoClassHandler {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    HasContentClassContext(content: string): boolean;
    ResolveClass(el: HTMLElement, sector: string, canBind?: boolean, canSubscribeDelay?: boolean, dataKeyFilter?: string, dataFieldFilter?: string, type?: DrapoStorageLinkType): Promise<void>;
    ResolveClassContext(context: DrapoContext, renderContext: DrapoRenderContext, el: HTMLElement, elj: JQuery, sector: string, canBind: boolean, type?: DrapoStorageLinkType): Promise<boolean>;
    private ExtractClasses;
}

declare class DrapoComponentHandler {
    private _application;
    private _dataSectors;
    private _dataTags;
    private _dataElements;
    private _dataInstances;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    ResolveComponents(jQueryStart?: JQuery): Promise<void>;
    ResolveComponentsElement(el: HTMLElement, context: DrapoContext, checkSectorReady: boolean, handleDynamicSectors: boolean): Promise<void>;
    private ResolveComponentElement;
    private GetSectorContext;
    private CreateGuidContext;
    private CreateGuidContextHierarchy;
    private CreateElementHierarchy;
    private InsertElementHierarchy;
    private GetElementIndex;
    private GetElementByHierarchy;
    private GetElementContent;
    private ResolveContentElement;
    IsComponent(tagName: string): boolean;
    private IsStartsWith;
    private SubscribeComponentInstance;
    private GetComponentInstanceIndex;
    private CreateComponentInstanceIndex;
    GetComponentInstance(sector: string, did?: string): any;
    private GetComponentInstanceByElementSector;
    private GetComponentInstanceInternal;
    UnloadComponentInstances(sector: string): boolean;
    UnloadComponentInstancesDetached(sector: string): Promise<boolean>;
    UnloadComponentInstancesDetachedFullCheck(): Promise<boolean>;
    HasContentComponent(content: string): boolean;
    ResolveComponentContext(sector: string, context: DrapoContext, el: HTMLElement, renderContext: DrapoRenderContext, canResolveComponents: boolean): Promise<void>;
    Retrieve(): [string, string, HTMLElement, any][];
    AppendInstances(sector: string, componentSectors: string[], componentTags: string[][], componentElements: HTMLElement[][], componentInstances: any[][]): void;
    AddInstances(container: DrapoSectorContainerItem): Promise<void>;
}

declare class DrapoConfig {
    private _application;
    private _url;
    private _cacheKeys;
    private _cacheDatas;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    private GetUrl;
    private GetUrlInternal;
    private Load;
    private IsLoaded;
    private EnsureLoaded;
    GetSector(name: string): Promise<any>;
    private GetCacheKeyIndex;
    private GetCacheData;
    private AddCacheData;
    private GetProperty;
    private GetPropertyBoolean;
    private GetPropertyArray;
    GetUsePipes(): Promise<boolean>;
    GetUseRouter(): Promise<boolean>;
    GetUseCacheStatic(): Promise<boolean>;
    GetPipeHubName(): Promise<string>;
    GetPipeActionRegister(): Promise<string>;
    GetPipeActionNotify(): Promise<string>;
    GetPipeHeaderConnectionId(): Promise<string>;
    GetOnAuthorizationRequest(): Promise<string>;
    GetOnError(): Promise<string>;
    GetStorageErrors(): Promise<string>;
    GetOnBadRequest(): Promise<string>;
    GetStorageBadRequest(): Promise<string>;
    GetValidatorUncheckedClass(): Promise<string>;
    GetValidatorValidClass(): Promise<string>;
    GetValidatorInvalidClass(): Promise<string>;
    GetApplicationBuild(): Promise<string>;
    GetViews(): Promise<DrapoView[]>;
}

declare class DrapoContext {
    private _sector;
    private _itemsRoot;
    private _items;
    private _itemParent;
    private _itemCurrent;
    private _itemCurrentStack;
    private _index;
    private _level;
    private _indexRelatives;
    private _indexRelative;
    private _checkpoint;
    private _checkMustacheNodes;
    private _checkMustacheAttributes;
    private _checkModel;
    private _checkID;
    private _checkAttribute;
    private _checkClass;
    private _checkEvent;
    private _checkBehavior;
    private _checkComponent;
    private _checkValidation;
    private _canUpdateTemplate;
    private _templateKeys;
    private _templateDatas;
    set Sector(value: string);
    get Sector(): string;
    get Item(): DrapoContextItem;
    set Index(value: number);
    get Index(): number;
    get IsEmpty(): boolean;
    set IndexRelative(value: number);
    get IndexRelative(): number;
    get Level(): number;
    get IsInsideRecursion(): boolean;
    set CheckMustacheNodes(value: boolean);
    get CheckMustacheNodes(): boolean;
    set CheckMustacheAttributes(value: boolean);
    get CheckMustacheAttributes(): boolean;
    set CheckModel(value: boolean);
    get CheckModel(): boolean;
    set CheckID(value: boolean);
    get CheckID(): boolean;
    set CheckAttribute(value: boolean);
    get CheckAttribute(): boolean;
    set CheckClass(value: boolean);
    get CheckClass(): boolean;
    set CheckEvent(value: boolean);
    get CheckEvent(): boolean;
    set CheckBehavior(value: boolean);
    get CheckBehavior(): boolean;
    set CheckComponent(value: boolean);
    get CheckComponent(): boolean;
    set CheckValidation(value: boolean);
    get CheckValidation(): boolean;
    get CanUpdateTemplate(): boolean;
    set CanUpdateTemplate(value: boolean);
    constructor(item?: DrapoContextItem);
    Create(data: any, element: HTMLElement, elementForTemplate: HTMLElement, dataKey: string, key: string, iterator: string, index: number, elementOld?: HTMLElement): DrapoContextItem;
    Pop(): DrapoContextItem;
    Down(): boolean;
    Up(): boolean;
    GetElementTemplate(key: string): HTMLElement;
    IsElementTemplateRoot(key: string): boolean;
    IsKey(key: string): boolean;
    GetDataKeyRoot(): string;
    Checkpoint(): void;
    private GetTemplateIndex;
    GetTemplate(templateKey: string): JQuery;
    AddTemplate(templateKey: string, templateData: JQuery): void;
    CanResolve(key: string): boolean;
    HasContextItemBefore(): boolean;
    GetContextRelativeArray(mustachePart: string): string[];
    GetIndex(key: string): number;
    GetIndexRelative(key: string): number;
}

declare class DrapoContextItem {
    private _context;
    private _parent;
    private _children;
    private _data;
    private _dataKey;
    private _key;
    private _iterator;
    private _index;
    private _element;
    private _elementForTemplate;
    private _elementOld;
    get Context(): DrapoContext;
    get Parent(): DrapoContextItem;
    get Children(): DrapoContextItem[];
    get Data(): any;
    set Data(value: any);
    get DataKey(): string;
    set DataKey(value: string);
    get Key(): string;
    set Key(value: string);
    get Iterator(): string;
    set Iterator(value: string);
    get Index(): number;
    set Index(value: number);
    get Element(): HTMLElement;
    set Element(value: HTMLElement);
    get ElementForTemplate(): HTMLElement;
    set ElementForTemplate(value: HTMLElement);
    get ElementOld(): HTMLElement;
    set ElementOld(value: HTMLElement);
    get RootItem(): DrapoContextItem;
    get RootElement(): HTMLElement;
    constructor(context: DrapoContext, parent?: DrapoContextItem);
}

/// <reference path="../typings/index.d.ts" />
declare class DrapoControlFlow {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    ResolveControlFlowDocument(): Promise<void>;
    ResolveControlFlowSector(jQueryStart: JQuery, canResolveComponents?: boolean): Promise<void>;
    private ResolveControlFlowForParent;
    private ResolveControlFlowForRoot;
    ResolveControlFlowFor(forJQuery: JQuery, isIncremental?: boolean, canUseDifference?: boolean, type?: DrapoStorageLinkType, canResolveComponents?: boolean): Promise<void>;
    private InitializeContext;
    IsElementControlFlowTemplate(el: HTMLElement): boolean;
    private ResolveControlFlowForInternal;
    private ResolveControlFlowForIterationRender;
    private CanApplyConditional;
    private ResolveControlFlowForIterationRenderClass;
    IsControlFlowForIterationVisible(sector: string, context: DrapoContext, el: Element, elj: JQuery, renderContext: DrapoRenderContext): Promise<boolean>;
    private CreateList;
    private RemoveList;
    private RemoveListIndex;
    private IsControlFlowDataKeyIterator;
    private GetControlFlowDataKeyIterators;
    private GetTemplateVariables;
    private GetControlFlowExpressionsDataKey;
    private GetControlFlowConditionsDataKey;
    private CreateTemplateKey;
    private CreateTemplate;
    private GetTemplateFromTemplateKey;
    private AddTemplate;
    GetIteratorRange(iterator: string): DrapoRange;
    private GetIteratorRangeInternal;
    private GetIteratorRangeString;
    CleanIteratorRange(iterator: string): string;
    private IsValidRange;
    private IsValidRangeIndex;
    ApplyRange(data: any[], range: DrapoRange): any[];
    GetRangeIndex(data: any[], rangeIndex: string): number;
    ExecuteDataItem(sector: string, context: DrapoContext, expression: string, forText: string, ifText: string, all: boolean, datas: any[], dataKey: string, key: string): Promise<boolean>;
    ResolveControlFlowForViewportScroll(viewport: DrapoViewport): Promise<void>;
    private CreateControlFlowForViewportFragment;
}

declare class DrapoCookieHandler {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    RetrieveData(name?: string): any;
    private CreateStructure;
    GetCookieValues(name?: string): [string, string][];
    private GetCookieValue;
    private CreateCookieValues;
    SetCookieValue(dataItem: DrapoStorageItem): boolean;
    private CreateCookieValue;
    private SetDocumentCookie;
    HandleCookieValuesChanges(cookieValuesBefore: [string, string][]): Promise<boolean>;
    private HandleCookieValueChange;
    private GetCookieValuesNamedChanged;
    private HasCookieValueChanged;
}

declare class DrapoDebugger {
    private _application;
    private _visible;
    private _active;
    private _sector;
    private SESSION_STORAGE_KEY;
    get Application(): DrapoApplication;
    get Visible(): any;
    get Active(): any;
    constructor(application: DrapoApplication);
    ConnectDebugger(): Promise<void>;
    Initialize(): Promise<void>;
    ToogleDebugger(): Promise<boolean>;
    ShowDebugger(): Promise<boolean>;
    CloseDebugger(): Promise<boolean>;
    HasBreakpoint(sector: string, dataKey: string): Promise<boolean>;
    ActivateBreakpoint(sector: string, dataKey: string, functionsValue: string, functionValue: string, label: string): Promise<void>;
    CleanRuntime(): Promise<void>;
    NotifySectors(): Promise<void>;
    NotifyStorage(dataKey: string): Promise<void>;
    NotifyComponents(): Promise<void>;
    AddNotify(dataKey: string): Promise<void>;
    AddPipe(pipe: string): Promise<void>;
    AddFunction(functionParsed: DrapoFunction): Promise<void>;
    AddError(error: string): Promise<void>;
    GetObjects(): Promise<any[]>;
    private CreateObject;
    private CreateObjectAction;
    private CreateObjectSector;
    private InsertObjectSectorChildrenSectors;
    private InsertObjectSectorChildrenData;
    private CreateObjectData;
    GetObjectData(): Promise<any[]>;
    private GetObjectDataItem;
    private InsertObjectData;
    private InsertObjectDataObject;
    private InsertObjectDataArray;
    private InsertObjectDataString;
    private CreateWatchValue;
    GetWatchsValues(): Promise<any[]>;
    ExecuteFunctionDebugger(parameters: string[]): Promise<void>;
    private ExecuteFunctionDebuggerHighligh;
    private ExecuteFunctionDebuggerHighlighSector;
    private ExecuteFunctionDebuggerHighlighComponent;
    GetComponents(): Promise<any[]>;
    CreateRequest(url: string): Promise<any>;
    FinishRequest(request: any): Promise<void>;
    private CreateComponentData;
    AddSectorUpdate(name: string, parent: string, url: string): Promise<void>;
    private ExecuteFunctionDebuggerReload;
    private ExecuteFunctionDebuggerPersist;
}

/// <reference path="../typings/index.d.ts" />
declare class DrapoDocument {
    private _application;
    private _pendingAuthorizations;
    private _sectorsLoaded;
    private _message;
    private _sectorHierarchy;
    private _sectorFriends;
    private _lastGuid;
    get Application(): DrapoApplication;
    get Message(): DrapoMessage;
    set Message(value: DrapoMessage);
    constructor(application: DrapoApplication);
    ResetPendingAuthorizations(count?: number): void;
    StartUpdate(sector: string): void;
    Resolve(): Promise<void>;
    ResolveInternal(): Promise<void>;
    private ResolveParent;
    ResolveParentResponse(data: string, parent: string, parentSector: string, childHtml: string, sectors: [string, string, string][]): Promise<void>;
    private ExtractSectors;
    private ExtractSectorProperty;
    private ResolveChildren;
    private LoadChildSectorInternal;
    private ReplaceSectorData;
    ResolveWindow(window: JQuery): Promise<void>;
    ResolveComponentDynamicSector(el: HTMLElement): Promise<void>;
    ResolveComponentUpdate(el: HTMLElement, context: DrapoContext): Promise<void>;
    RemoveElement(el: HTMLElement): Promise<void>;
    private RemoveElementIteration;
    private RemoveSectorData;
    LoadChildSector(sectorName: string, url: string, title?: string, canRoute?: boolean, canLoadDefaultSectors?: boolean, container?: string): Promise<boolean>;
    LoadChildSectorContent(sectorName: string, content: string): Promise<boolean>;
    LoadChildSectorDefault(sectorName: string): Promise<boolean>;
    private ReplaceDocument;
    ReplaceElement(el: Element, elNew: Element | string | JQuery): void;
    Show(elj: JQuery): JQuery;
    private ShowInternal;
    Hide(selector: JQuery): JQuery;
    GetWrapper(elj: JQuery): HTMLElement;
    private Wrap;
    GetElementAttributes(el: Element): [string, string][];
    GetElementAttributesFilteredPrefix(el: Element, prefix: string): [string, string][];
    SetElementAttributes(elj: JQuery, attributes: [string, string][]): void;
    private ExtractHeadInnerHtml;
    private RemoveFramework;
    private ExtractBodyInnerHtml;
    private GetOuterHtml;
    IsElementInserted(list: HTMLElement[], itemInsert: HTMLElement): boolean;
    IsElementAttached(el: HTMLElement): boolean;
    IsElementInsideControlFlow(el: HTMLElement): boolean;
    IsElementInsideControlFlowOrContext(el: HTMLElement): boolean;
    IsElementPreprocessed(el: HTMLElement): boolean;
    RequestAuthorization(dataKey: string, type: string): Promise<void>;
    private TryOnAuthorizationRequest;
    private OnAuthorizationRequest;
    private IsSectorAlreadyLoaded;
    MarkSectorAsLoaded(sector: string): void;
    private InitializeSectorsLoaded;
    GetSectorParent(el: HTMLElement): string;
    GetSector(el: HTMLElement): string;
    private GetElementByAttribute;
    private GetSectorElement;
    GetSectorElementInner(sector: string): HTMLElement;
    SetSectorElementInner(sector: string, el: HTMLElement, canDetach: boolean): void;
    private InitializeSectorElementDetach;
    CanDetachElement(el: HTMLElement): boolean;
    IsElementDetached(el: HTMLElement): boolean;
    IsElementAlive(el: HTMLElement): boolean;
    IsElementInsideComponent(el: HTMLElement): boolean;
    private HasElementIframe;
    private HasElementCantDetach;
    GetSectorImpersonate(el: HTMLElement): string;
    IsSectorDynamic(el: HTMLElement): Promise<boolean>;
    GetSectorResolved(el: HTMLElement): Promise<string>;
    CreateGuid(isShort?: boolean): string;
    private CreateGuidShort;
    private CreateGuidShortInternal;
    EnsureElementHasID(el: HTMLElement): string;
    ApplyNodeDifferences(parent: HTMLElement, nodeOld: HTMLElement, nodeNew: HTMLElement): void;
    ApplyNodeDifferencesRenderClass(nodeOld: HTMLElement, nodeNew: HTMLElement): void;
    private IsNodeDifferentType;
    private ApplyNodeEventsDifferences;
    private ExtractNodeEvents;
    private ExtractEvents;
    private ExtractEventHandler;
    private CreateNodeEventNamespace;
    private ApplyNodeSpecialDifferences;
    private ApplyNodeSpecialDifferencesInput;
    private ApplyNodeSpecialDifferencesSelect;
    private ApplyNodeSpecialDifferencesTextarea;
    private ApplyNodeAttributesDifferences;
    private ExtactNodeAttributes;
    private ExtractNodeAttributeValue;
    Contains(elementJQuery: JQuery): boolean;
    ExtractQueryString(canUseRouter: boolean): [string, string][];
    Sleep(timeout: number): Promise<{}>;
    WaitForMessage(retry?: number, interval?: number): Promise<DrapoMessage>;
    AddSectorHierarchy(sector: string, sectorParent: string): Promise<void>;
    GetSectorAndChildren(sector: string): string[];
    GetSectorChildren(sector: string): string[];
    GetSectorHierarchyChildren(sector: string): string[];
    IsSectorReady(sector: string): boolean;
    private GetSectorHierarchyParents;
    AppendSectorHierarchyBySector(sectorHierarchy: [string, string][], sector: string): void;
    AddSectorHierarchys(sectorHierarchys: [string, string][]): void;
    AppendSectorFriendsBySector(sectorFriends: [string, string[]][], sector: string): void;
    AddSectorFriendsRange(sectorFriends: [string, string[]][]): void;
    IsSystemKey(key: string): boolean;
    IsHiddenKey(key: string): boolean;
    GetSectors(): string[];
    IsEqualSector(sector1: string, sector2: string): boolean;
    IsSectorRoot(sector: string): boolean;
    CleanSectorMetadata(sector: string): void;
    private CleanSectorMetadataInternal;
    GetSectorsAllowed(sector: string): string[];
    IsSectorAllowed(sector: string, sectors: string[]): boolean;
    AddSectorFriends(sector: string, sectorFriendsText: string): void;
    private GetSectorFriends;
    CollectSector(sector: string): Promise<void>;
    IsFirstChild(elj: JQuery): boolean;
    IsLastChild(elj: JQuery): boolean;
    ReceiveMessage(message: DrapoMessage): Promise<void>;
    private ExecuteMessage;
    private UpdateMessage;
    GetClipboard(): Promise<string>;
    private GetClipboardValueAsync;
    private GetClipboardValueExecCommand;
    SetClipboard(value: string): Promise<void>;
    StartUnitTest(): Promise<void>;
}

declare class DrapoDrag {
    private _code;
    private _action;
    private _contextItem;
    private _tags;
    private _notify;
    private _onBefore;
    private _onAfter;
    private _dataKey;
    private _sector;
    private _custom;
    get Code(): string;
    set Code(value: string);
    get Action(): string;
    set Action(value: string);
    get Item(): DrapoContextItem;
    set Item(value: DrapoContextItem);
    get Tags(): string[];
    set Tags(value: string[]);
    get Notify(): boolean;
    set Notify(value: boolean);
    get OnBefore(): string;
    set OnBefore(value: string);
    get OnAfter(): string;
    set OnAfter(value: string);
    get DataKey(): string;
    set DataKey(value: string);
    get Sector(): string;
    set Sector(value: string);
    get Custom(): string;
    set Custom(value: string);
    constructor();
    IsMatch(tags: string[]): boolean;
}

declare class DrapoEventHandler {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    HasContentEventContext(content: string): boolean;
    CreateEventNamespace(el: HTMLElement, location: string, eventType: string, namespace: string): string;
    GetEventPropagation(el: HTMLElement, eventType: string): boolean;
    private RetrieveEventBinder;
    private IsLocationBody;
    GetElementParent(element: Element, levels?: number): JQuery;
    Attach(el: HTMLElement, renderContext: DrapoRenderContext): Promise<void>;
    AttachContext(context: DrapoContext, el: HTMLElement, elj: JQuery, sector: string, renderContext: DrapoRenderContext): Promise<void>;
    private ExecuteEvent;
    private IsEventTypeValid;
    private IsEventDelay;
    private HasEventDoubleClickInParent;
    private IsEventTypeKeyboard;
    IsValidEventFilter(e: Event, eventFilter: string): boolean;
    private IsValidEventFilterKeyboard;
    private GetKeyboardMapping;
    private RetrieveElementEvents;
}

declare class DrapoExceptionHandler {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    Handle(e: any, context?: string): Promise<void>;
    HandleError(message: string, ...parameters: string[]): Promise<void>;
}

declare class DrapoExecutionContext<T> {
    private _application;
    private _hasError;
    private _canReset;
    private _hasBreakpoint;
    private _sector;
    private _dataKey;
    private _data;
    private _sectorContainer;
    private _windowsAutoClose;
    get HasError(): boolean;
    set HasError(value: boolean);
    get CanReset(): boolean;
    set CanReset(value: boolean);
    get HasBreakpoint(): boolean;
    set HasBreakpoint(value: boolean);
    get Sector(): string;
    set Sector(value: string);
    get DataKey(): string;
    set DataKey(value: string);
    get Data(): T;
    set Data(value: T);
    constructor(application: DrapoApplication);
    Continue(): Promise<boolean>;
    AddSectorContainer(sector: string, containerCode: string): void;
    HasSectorContainer(sector: string): boolean;
    GetSectorContainer(sector: string): string;
    AddWindowAutoClose(window: DrapoWindow): void;
    GetWindowsAutoClose(): DrapoWindow[];
}

declare class DrapoExpressionItem {
    private _type;
    private _value;
    private _items;
    get Type(): DrapoExpressionItemType;
    set Type(value: DrapoExpressionItemType);
    get Value(): string;
    set Value(value: string);
    get Items(): DrapoExpressionItem[];
    set Items(value: DrapoExpressionItem[]);
    constructor(type: DrapoExpressionItemType, value?: string);
    GetItemIndex(value: string): number;
}

declare enum DrapoExpressionItemType {
    Block = 0,
    Text = 1,
    Function = 2,
    Mustache = 3,
    Comparator = 4,
    Logical = 5,
    Deny = 6,
    Arithmetic = 7
}

declare class DrapoFormatter {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    Format(value: string, format: string, culture?: string): string;
    private FormatDate;
    private ConvertDateFormat;
    private GetDateFormattedTokens;
    private GetDateFormattedToken;
    private EnsureLength;
    private EnsureLengthMax;
    private FormatNumber;
    private FormatNumberNumeric;
    private FormatNumberPercentage;
    private FormatNumberDecimal;
    private FormatNumberTimespan;
    private FormatNumberSize;
    private GetNumberFormattedWithCulture;
    private GetFormatTokenNumber;
}

declare class DrapoFunction {
    private _name;
    private _parameters;
    get Name(): string;
    set Name(value: string);
    get Parameters(): string[];
    set Parameters(value: string[]);
}

declare class DrapoFunctionHandler {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    ResolveFunctionWithoutContext(sector: string, element: Element, functionsValue: string, executionContext?: DrapoExecutionContext<any>): Promise<string>;
    CreateExecutionContext(canReset?: boolean): DrapoExecutionContext<any>;
    private FinalizeExecutionContext;
    private IsExecutionBroked;
    ReplaceFunctionExpressions(sector: string, context: DrapoContext, expression: string, canBind: boolean): Promise<string>;
    private ReplaceFunctionExpressionsContext;
    ResolveFunction(sector: string, contextItem: DrapoContextItem, element: Element, event: JQueryEventObject, functionsValue: string, executionContext?: DrapoExecutionContext<any>, forceFinalizeExecutionContext?: boolean): Promise<string>;
    private ResolveFunctionContext;
    ResolveFunctionParameter(sector: string, contextItem: DrapoContextItem, element: Element, executionContext: DrapoExecutionContext<any>, parameter: string, canForceLoadDataDelay?: boolean, canUseReturnFunction?: boolean, isRecursive?: boolean): Promise<any>;
    ResolveFunctions(sector: string, contextItem: DrapoContextItem, element: Element, executionContext: DrapoExecutionContext<any>, value: string): Promise<any>;
    private ResolveFunctionParameterDataFields;
    private ExecuteFunctionContextSwitch;
    private ExecuteFunctionExternal;
    private ExecuteFunctionSetExternal;
    private ExecuteFunctionGetExternal;
    private ExecuteFunctionSetExternalFrame;
    private ExecuteFunctionGetExternalFrame;
    private ExecuteFunctionSetExternalFrameMessage;
    private ExecuteFunctionGetExternalFrameMessage;
    private ExecuteFunctionToggleItemField;
    private ExecuteFunctionUncheckItemField;
    private ExecuteFunctionClearItemField;
    private ExecuteFunctionUpdateItemField;
    private ExecuteFunctionCheckDataField;
    private ExecuteFunctionUncheckDataField;
    private ExecuteFunctionClearDataField;
    private ExecuteFunctionUpdateDataField;
    private ExecuteFunctionUpdateDataFieldLookup;
    private ExecuteFunctionCheckItemField;
    private ExecuteFunctionMoveItem;
    private ExecuteFunctionUpdateDataUrl;
    private ExecuteFunctionUpdateDataUrlSet;
    private ExecuteFunctionAddDataItem;
    private ExecuteFunctionRemoveDataItem;
    private ExecuteFunctionRemoveDataItemLookup;
    private ExecuteFunctionContainsDataItem;
    private ExecuteFunctionUpdateSector;
    private ExecuteFunctionSwitchSector;
    private ExecuteFunctionReloadSector;
    private ExecuteFunctionClearSector;
    private ExecuteFunctionLoadSectorContent;
    private ExecuteFunctionClearData;
    private ExecuteFunctionUnloadData;
    private ExecuteFunctionCreateData;
    private ExecuteFunctionUpdateData;
    private ExecuteFunctionReloadData;
    private ExecuteFunctionFilterData;
    private ExecuteFunctionHasDataChanges;
    private ExecuteFunctionAcceptDataChanges;
    private ExecuteFunctionPostData;
    private ExecuteFunctionPostDataItem;
    private ExecuteFunctionReloadPage;
    private ExecuteFunctionClosePage;
    private ExecuteFunctionRedirectPage;
    private ExecuteFunctionUpdateURL;
    private ExecuteFunctionUpdateToken;
    private ExecuteFunctionClearToken;
    private ExecuteFunctionHasToken;
    private ExecuteFunctionDestroyContainer;
    private ExecuteFunctionIf;
    private ExecuteFunctionAsync;
    private ExecuteFunctionNotify;
    private ExecuteFunctionFocus;
    private ExecuteFunctionShowWindow;
    private ExecuteFunctionCloseWindow;
    private ExecuteFunctionHideWindow;
    private ExecuteFunctionGetWindow;
    private ExecuteFunctionCreateGuid;
    private ExecuteFunctionExecute;
    private ExecuteFunctionExecuteDataItem;
    private ExecuteFunctionExecuteComponentFunction;
    private ExecuteFunctionExecuteInstanceFunction;
    private ExecuteFunctionCast;
    private ExecuteFunctionAddRequestHeader;
    private ExecuteFunctionSetClipboard;
    private ExecuteFunctionCreateTimer;
    private ExecuteFunctionWait;
    private ExecuteFunctionDownloadData;
    private DownloadData;
    private CreateBlob;
    private ExecuteFunctionDetectView;
    private ExecuteFunctionDebugger;
    private ExecuteFunctionGetSector;
    private ExecuteFunctionGetClipboard;
    private ExecuteFunctionExecuteValidation;
    private ExecuteFunctionClearValidation;
    HasFunctionMustacheContext(functionsValue: string, sector: string, renderContext: DrapoRenderContext): Promise<boolean>;
    private HasFunctionMustacheContextInternal;
    private HasFunctionsContext;
    private GetFunctionsContext;
    private IsFunctionContext;
}

declare class DrapoGlobalization {
    private _application;
    private _culture;
    private _resourceDayOfWeekNameShort;
    private _resourceDayOfWeekName;
    private _resourceMonthNameShort;
    private _resourceMonthName;
    private _resourceDateFormat;
    private _resourceNumberSizeType;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    private Initialize;
    private InitializeResource;
    private InitializeResourceDictionary;
    private GetLanguage;
    private GetCultureNeutral;
    private GetCultureCookie;
    private GetCultureLanguage;
    ReloadCulture(): Promise<boolean>;
    GetCulture(): string;
    GetDelimiterDecimal(culture: string): string;
    GetDelimiterThousands(culture: string): string;
    GetDayOfWeekNameShort(day: number, culture: string): string;
    GetDayOfWeekName(day: number, culture: string): string;
    GetMonthNameShort(day: number, culture: string): string;
    GetMonthName(day: number, culture: string): string;
    private GetResourceValue;
    private GetResourceCulture;
    GetDateFormat(dateFormatType: string, culture: string): string;
    GetDateFormatsRegex(culture?: string): string;
    private GetDateFormatRegex;
    GetDateFormatsRegularExpressions(culture?: string): DrapoRegularExpression[];
    private ReplaceDataFormatRegex;
    private GetResourceValueDictionary;
    private GetResourceCultureDictionary;
    GetNumberSizeTypeName(type: number, culture?: string): string;
}

declare class DrapoLinkedCube<T> {
    private _head;
    AddOrUpdate(context: string[], value: T): DrapoLinkedCubeNode<T>;
    Get(context: string[]): T;
    GetNode(context: string[]): DrapoLinkedCubeNode<T>;
    Clear(): void;
    Remove(context: string[]): DrapoLinkedCubeNode<T>;
    GetHead(): DrapoLinkedCubeNode<T>;
    private CreateNode;
    private GetNextInContext;
    private GetNextReverse;
    private GetNextReverseIndex;
    private IsEqualContext;
    private EnsureNodeNext;
    private AddNodeNext;
    private MoveLinks;
    private GetNodeNext;
    ToList(node?: DrapoLinkedCubeNode<T>): DrapoLinkedCubeNode<T>[];
    private AppendNodeToList;
    ToListValues(node?: DrapoLinkedCubeNode<T>): T[];
}

declare class DrapoLinkedCubeNode<T> {
    Value: T;
    Context: string[];
    Next: DrapoLinkedCubeNode<T>[];
}

declare class DrapoLinkedList<T> {
    private _head;
    AddOrUpdate(index: number, value: T): void;
    Get(index: number): T;
    GetHead(): DrapoLinkedListNode<T>;
}

declare class DrapoLinkedListNode<T> {
    Value: T;
    Next: DrapoLinkedListNode<T>;
    Index: number;
}

declare class DrapoLinkedTable<T> {
    private _head;
    AddOrUpdate(row: number, column: number, value: T): void;
    Get(row: number, column: number): T;
    GetHead(): DrapoLinkedTableNode<T>;
    Delete(row: number, column: number): void;
}

declare class DrapoLinkedTableNode<T> {
    Value: T;
    NextCell: DrapoLinkedTableNode<T>;
    NextRow: DrapoLinkedTableNode<T>;
    Row: number;
    Column: number;
}

declare class DrapoLogger {
    private _application;
    private _showHtml;
    private _allowVerbose;
    private _allowError;
    get Application(): DrapoApplication;
    set ShowHtml(value: boolean);
    get ShowHTML(): boolean;
    set AllowVerbose(value: boolean);
    get AllowVerbose(): boolean;
    set AllowError(value: boolean);
    get AllowError(): boolean;
    constructor(application: DrapoApplication);
    WriteVerbose(message: string, ...parameters: string[]): void;
    WriteError(message: string, parameters: string[]): Promise<void>;
    private CreateMessage;
}

declare class DrapoMessage {
    private _action;
    private _dataKey;
    private _sector;
    private _tag;
    private _data;
    get Action(): string;
    set Action(value: string);
    get DataKey(): string;
    set DataKey(value: string);
    get Sector(): string;
    set Sector(value: string);
    get Tag(): string;
    set Tag(value: string);
    get Data(): any;
    set Data(value: any);
}

declare class DrapoModelHandler {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    HasContentModelContext(content: string): boolean;
    ResolveOnModelChange(contextItem: DrapoContextItem, el: HTMLElement): Promise<void>;
    ResolveOnModelComplete(contextItem: DrapoContextItem, el: HTMLElement): Promise<void>;
    ResolveModel(context: DrapoContext, renderContext: DrapoRenderContext, el: HTMLElement, elj: JQuery, sector: string, canBind: boolean, isContext?: boolean): Promise<boolean>;
    ResolveValueExpression(context: DrapoContext, el: HTMLElement, sector: string, model: string, canBind: boolean): Promise<string>;
    ResolveModelInput(context: DrapoContext, el: HTMLElement, elementJQuery: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[], modelEventsCancel: string[]): Promise<boolean>;
    ResolveModelInputCheckbox(context: DrapoContext, element: Element, elementJQuery: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[]): Promise<boolean>;
    ResolveModelTextArea(context: DrapoContext, el: Element, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[], modelEventsCancel: string[]): Promise<boolean>;
    ResolveModelInputText(context: DrapoContext, element: Element, elj: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[], modelEventsCancel: string[]): Promise<boolean>;
    ResolveModelInputNumber(context: DrapoContext, element: Element, elementJQuery: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[], modelEventsCancel: string[]): Promise<boolean>;
    ResolveModelInputPassword(context: DrapoContext, element: Element, elementJQuery: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[], modelEventsCancel: string[]): Promise<boolean>;
    ResolveModelInputHidden(context: DrapoContext, element: Element, elementJQuery: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[]): Promise<boolean>;
    ResolveModelInputRange(context: DrapoContext, element: Element, elementJQuery: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[]): Promise<boolean>;
    ResolveModelSelect(context: DrapoContext, element: Element, elementJQuery: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean, modelEvents: string[]): Promise<boolean>;
    private ResolveModelSpan;
    ResolveModelLI(context: DrapoContext, el: HTMLElement, elj: JQuery, sector: string, model: string, mustache: string, mustacheParts: string[], dataFields: string[], canBind: boolean): Promise<boolean>;
}

declare class DrapoObserver {
    private _application;
    private _dataBarberDataKeys;
    private _dataBarberFields;
    private _dataBarberElements;
    private _dataForDataKey;
    private _dataForElement;
    private _dataIncrementalKey;
    private _dataIncrementalElements;
    private _IsEnabledNotifyIncremental;
    private _dataDelayKey;
    private _dataDelayField;
    private _dataDelayElements;
    private _dataStorageKey;
    private _dataStorageKeyFields;
    private _dataStorageKeyReferenceKey;
    private _dataStorageType;
    private _dataAuthorizationKey;
    private _dataAuthorizationType;
    private _dataLinkDataKey;
    private _dataLinkReferenceKey;
    private _dataLinkDataFields;
    private _dataComponentKey;
    private _dataComponentField;
    private _dataComponentElements;
    private _dataComponentFunction;
    private _dataComponentElementsFocus;
    get Application(): DrapoApplication;
    get IsEnabledNotifyIncremental(): boolean;
    set IsEnabledNotifyIncremental(value: boolean);
    constructor(application: DrapoApplication);
    private GetBarberDataKeyIndex;
    private GetForDataKeyIndex;
    private GetDataIncrementalKeyIndex;
    private CreateBarberDataKeyIndex;
    private CreateForDataKeyIndex;
    private CreateDataIncrementalKeyIndex;
    SubscribeBarber(element: HTMLElement, dataKey: string, dataFields: string[]): boolean;
    private UnsubscribeBarber;
    SubscribeFor(elementForTemplate: HTMLElement, dataKey: string): void;
    SubscribeStorage(dataKey: string, dataFields: string[], dataReferenceKey: string, type?: DrapoStorageLinkType): void;
    private UnsubscribeStorage;
    private UnsubscribeStorageReferenceKey;
    UnsubscribeFor(dataKey: string, elementForTemplate?: HTMLElement): void;
    Notify(dataKey: string, dataIndex: number, dataFields: string[], canUseDifference?: boolean): Promise<void>;
    NotifyFor(dataKey: string, dataIndex: number, dataFields: string[], canUseDifference?: boolean, type?: DrapoStorageLinkType): Promise<void>;
    NotifyBarber(dataKey: string, dataFields: string[]): Promise<void>;
    NotifyStorage(dataKey: string, dataFields: string[]): Promise<void>;
    NotifyStorageRenderClass(dataKey: string): Promise<void>;
    SubscribeIncremental(el: HTMLElement, dataKey: string): void;
    NotifyIncremental(dataKey: string): Promise<void>;
    SubscribeDelay(el: HTMLElement, dataKey: string, dataFields: string[]): void;
    NotifyDelay(dataKey: string, dataFields: string[]): Promise<void>;
    SubscribeAuthorization(dataKey: string, type: string): void;
    HasDataKeyAuthorization(dataKey: string): boolean;
    private GetDataKeyAuthorizationIndex;
    NotifyAuthorization(): Promise<void>;
    HasPendingAuthorization(): boolean;
    GetPendingAuthorization(): number;
    HasDelayKeys(): boolean;
    GetDelayKeys(): string[];
    GetDelayFields(dataKey: string): string[];
    private GetDelayKeyIndex;
    private GetDelayFieldKeyIndex;
    private GetStorageKeyIndex;
    private CreateStorageDataKeyIndex;
    SubscribeLink(dataKey: string, referenceKey: string, dataFields?: string[]): boolean;
    SubscribeLinkMustache(mustache: string, referenceKey: string): boolean;
    UnsubscribeLink(dataKey: string, referenceKey?: string): boolean;
    private GetLinkIndex;
    private NotifyLink;
    Unsubscribe(dataKey: string): void;
    UnsubscribeDetached(sector: string): void;
    private GetComponentDataKeyIndex;
    private CreateComponentDataKeyIndex;
    SubscribeComponent(value: string, el: HTMLElement, notifyFunction: Function, elFocus?: HTMLElement): void;
    private UnsubscribeComponent;
    private UnsubscribeComponentDetached;
    private NotifyComponent;
    GetElementByModel(sector: string, model: string): HTMLElement;
    private GetElementByModelComponent;
    private GetElementByModelBarber;
    private IsCompatibleDataFields;
    private IsEqualDataFields;
}

/// <reference path="../typings/index.d.ts" />
declare class DrapoParser {
    private readonly MUSTACHE_START;
    private readonly MUSTACHE_START_OVERFLOW;
    private readonly MUSTACHE_END;
    private readonly MUSTACHE_INDEXER_START;
    private readonly MUSTACHE_INDEXER_END;
    private readonly ITERATOR_START;
    private readonly ITERATOR_END;
    private readonly CLASS_START;
    private readonly CLASS_END;
    private _application;
    private readonly _tokensStart;
    private readonly _tokensBlock;
    private readonly _tokensComparator;
    private readonly _tokensLogical;
    private readonly _tokensArithmetic;
    private readonly _canUseRegexGroups;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    Tokenize(data: string, splitter?: string): string[];
    ParseFor(data: string): string[];
    ParseForIterable(data: string): string[];
    ParseMustaches(data: string, checkEmbedded?: boolean): string[];
    private ParseMustachesInternal;
    IsMustache(data: string): boolean;
    IsMustacheContentValid(data: string): boolean;
    IsMustacheIndexer(data: string): boolean;
    GetMustacheInsideIndexer(data: string): string;
    CreateMustacheIndexer(data: string): string;
    private GetMatchs;
    HasMustache(data: string): boolean;
    ParseMustache(data: string): string[];
    ParseProperty(data: string): string[];
    ParsePath(data: string): string[];
    HasFunction(data: string): boolean;
    IsFunction(data: string): boolean;
    ParseFunctionsPartial(data: string): string[];
    private IsFunctionPartialDelimiter;
    ParseFunctions(data: string): string[];
    private GetFunctionStart;
    private IsFunctionStartValid;
    ParseFunction(data: string, checkParameters?: boolean): DrapoFunction;
    ParseParameters(data: string): string[];
    ParseBlock(data: string, delimiter: string): string[];
    ParseBlockMathematicalExpression(data: string): string[];
    private IsBlockNumber;
    private ParseBlockMathematicalExpressionSignals;
    private IsMathematicalOperator;
    private IsValidFunctionParameter;
    IsIterator(data: string): boolean;
    private IsIteratorArray;
    ParseIterator(data: string): any[];
    private ParseIteratorArray;
    ParseNumberBlock(data: string, valueDefault?: number): number;
    private ReplaceDateWithTimespan;
    IsClassArray(data: string): boolean;
    IsMustacheOnly(data: string, allowInternal?: boolean): boolean;
    private IsMutacheOnlyInternal;
    ParseClassArray(data: string): string[];
    ParseTags(data: string): string[];
    ParseClass(data: string): [string, string, string];
    ParseConditionalBlock(data: string): string;
    ParseConditionalLogicalOrComparator(data: string): string[];
    private ParseConditionalLogicalOrComparatorSeparator;
    GetStringAsNumber(text: string): number;
    ParseEvents(data: string): string[];
    ParseEventProperty(event: string, value: string): [string, string, string, string, string];
    private ParseEventLocation;
    ParseEvent(event: string): [string, string];
    IsUri(data: string): boolean;
    IsHTML(data: string): boolean;
    ParsePipes(data: string): string[];
    ParseDocumentContent(data: string): string;
    ParseElementAttributes(data: string): [string, string][];
    private ParseElement;
    ParseAttributes(data: string): [string, string][];
    private ParseAttribute;
    ParseDate(data: string): Date;
    ParseDateCulture(data: string, culture?: string): Date;
    private ParseDateCultureRegex;
    private ParseDateCultureRegularExpression;
    private IsDate;
    private ParseDateGroupNumber;
    ParseNumber(data: string, valueDefault?: number): number;
    ParseNumberPercentageCulture(data: string, culture?: string): number | null;
    ParseNumberCulture(data: string, culture?: string): number | null;
    ParseBoolean(data: string, valueDefault?: boolean): boolean;
    ParseQueryString(url: string): [string, string][];
    ParseValidationGroups(data: string): string[];
    IsValidatorArray(data: string): boolean;
    ParseValidatorsArray(data: string): string[];
    ParseValidator(data: string): [string, string];
    ParseHTMLAttributes(data: string): [string, string][];
    private ParseBlockAttribute;
    ParseExpression(expression: string): DrapoExpressionItem;
    private ParseExpressionInsert;
    private ParseExpressionTokens;
    private AddTokenNonEmpty;
    private Trim;
    private IsTokenEmpty;
    private IsParseExpressionStartingToken;
    private IsParseExpressionMiddleToken;
    private IsLetterOrNumber;
    IsNumber(chr: any): boolean;
    IsBoolean(data: any): boolean;
    private ParseExpressionItem;
    private ParseExpressionItemType;
    private IsParseExpressionItemTypeComplete;
    ParseLines(data: string): string[];
    ParseHeader(data: string): [string, string];
    ParseFormat(format: string): string[];
    private IsFormatCharacterCompatible;
    ParsePixels(value: string): number;
}

declare class DrapoPipeMessage {
    private _type;
    private _data;
    get Type(): DrapoPipeMessageType;
    set Type(value: DrapoPipeMessageType);
    get Data(): string;
    set Data(value: string);
}

declare enum DrapoPipeMessageType {
    Register = 0,
    Storage = 1,
    Execute = 2
}

declare var signalR: any;
declare class DrapoPlumber {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    private CanUsePipes;
    ConnectPipe(): Promise<boolean>;
    RequestPipeRegister(connection: any): Promise<void>;
    private WaitForRegister;
    NotifyPipe(message: DrapoPipeMessage): Promise<void>;
    NotifyPipeStorage(message: DrapoPipeMessage): Promise<void>;
    private NofityPipeRegister;
    private NofityPipeExecute;
}

declare class DrapoRange {
    private _start;
    private _end;
    get Start(): string;
    set Start(value: string);
    get End(): string;
    set End(value: string);
    constructor(start?: string, end?: string);
}

declare class DrapoRegister {
    private _application;
    private _components;
    private _cacheKeys;
    private _cacheDatas;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    private GetRegisteredComponent;
    IsRegisteredComponent(tagName: string): Promise<boolean>;
    IsActiveComponent(tagName: string): boolean;
    ActivateComponent(tagName: string): Promise<void>;
    private ActivateComponentFileScript;
    private ActivateComponentFileStyle;
    CreateInstanceComponent(tagName: string, el: HTMLElement): Promise<any>;
    private WaitForFunction;
    GetRegisteredComponentViewContent(tagName: string): Promise<string>;
    private GetRegisteredComponentFileContent;
    private GetComponentFileUrl;
    private GetRegisteredComponentFileContentInternal;
    private CreateKeyComponentFile;
    private GetCacheKeyIndex;
    private GetCacheData;
    private AddCacheData;
    private IsEndsWith;
}

declare class DrapoRegularExpression {
    private _expression;
    private _items;
    get Expression(): string;
    set Expression(value: string);
    get Items(): DrapoRegularExpressionItem[];
    CreateItem(expression: string, name?: string): DrapoRegularExpressionItem;
    IsValid(value: string): boolean;
    GetValue(name: string): string;
}

declare class DrapoRegularExpressionItem {
    private _expression;
    private _name;
    private _value;
    get Expression(): string;
    set Expression(value: string);
    get Name(): string;
    set Name(value: string);
    get Value(): string;
    set Value(value: string);
}

declare class DrapoRenderContext {
    private _sectorExpressionContexts;
    private _dataKeyElements;
    private GetKey;
    HasExpressionContext(sector: string, expression: string): boolean;
    AddExpressionContext(sector: string, expression: string, hasContext: boolean): void;
    HasDataKeyElement(dataKey: string): boolean;
    AddDataKeyElement(dataKey: string, hasElement: boolean): void;
}

declare class DrapoResize {
    private _code;
    private _contextItem;
    private _element;
    private _parentJQuery;
    private _containerJQuery;
    private _model;
    private _location;
    private _type;
    private _unit;
    private _class;
    private _preview;
    private _sizeStart;
    private _unitStart;
    private _eventStartValue;
    private _eventCurrentValue;
    get Code(): string;
    set Code(value: string);
    get Item(): DrapoContextItem;
    set Item(value: DrapoContextItem);
    get Element(): HTMLElement;
    set Element(value: HTMLElement);
    get ParentJQuery(): JQuery;
    set ParentJQuery(value: JQuery);
    get ContainerJQuery(): JQuery;
    set ContainerJQuery(value: JQuery);
    get Model(): string;
    set Model(value: string);
    get Location(): string;
    set Location(value: string);
    get Type(): string;
    set Type(value: string);
    get Unit(): string;
    set Unit(value: string);
    get Class(): string;
    set Class(value: string);
    get Preview(): boolean;
    set Preview(value: boolean);
    get SizeStart(): number;
    set SizeStart(value: number);
    get UnitStart(): string;
    set UnitStart(value: string);
    get EventStartValue(): number;
    set EventStartValue(value: number);
    get EventCurrentValue(): number;
    set EventCurrentValue(value: number);
    constructor();
}

declare class DrapoRouteItem {
    private _url;
    private _sector;
    private _title;
    private _state;
    get Url(): string;
    set Url(value: string);
    get Sector(): string;
    set Sector(value: string);
    get Title(): string;
    set Title(value: string);
    get State(): any;
    set State(value: any);
}

declare class DrapoRouter {
    private _application;
    private _routes;
    private _canUseRouter;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    private Create;
    GetLastRouteUrlBySector(sector: string): string;
    GetLastRouteUrl(): string;
    private GetLastRouteBySector;
    private GetLastRouteTitle;
    CanUseRouter(): Promise<boolean>;
    Route(url: string, sector?: string, title?: string, state?: any): Promise<void>;
    OnPopState(e: Event): void;
    private UpdateTitle;
    UpdateURL(url: string): Promise<void>;
}

declare class DrapoSectorContainerHandler {
    private readonly CONTAINER_EQUAL;
    private _application;
    private _containers;
    private _activeSectorContainers;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    IsElementContainerized(element: HTMLElement): boolean;
    private GetElementRoot;
    Switch(sector: string, containerCode?: string): Promise<boolean>;
    private CreateContainer;
    private LoadContainer;
    UnloadSector(sector: string): Promise<void>;
    RemoveByContainer(containerCode: string): boolean;
    RemoveBySector(sector: string): boolean;
    GetStorageItem(sector: string, containerCode: string, dataKey: string): DrapoStorageItem;
    ReloadStorageItemByPipe(dataPipe: string): void;
}

declare class DrapoSectorContainerItem {
    private _sector;
    private _containerCode;
    private _storageItems;
    private _sectorHierarchys;
    private _sectorFriends;
    private _componentSectors;
    private _componentTags;
    private _componentElements;
    private _componentInstances;
    private _element;
    private _canDetachElement;
    get Sector(): string;
    get ContainerCode(): string;
    get StorageItems(): [string, DrapoStorageItem][];
    get SectorHierarchys(): [string, string][];
    get SectorFriends(): [string, string[]][];
    get ComponentSectors(): string[];
    get ComponentTags(): string[][];
    get ComponentElements(): HTMLElement[][];
    get ComponentInstances(): any[][];
    get Element(): HTMLElement;
    get CanDetachElement(): boolean;
    constructor(sector: string, containerCode: string, storageItems: [string, DrapoStorageItem][], sectorHierarchys: [string, string][], sectorFriends: [string, string[]][], componentSectors: string[], componentTags: string[][], componentElements: HTMLElement[][], componentInstances: any[][], element: HTMLElement, canDetachElement: boolean);
}

declare class DrapoSerializer {
    private readonly JSON_START;
    private readonly JSON_END;
    private readonly JSON_ARRAY_START;
    private readonly JSON_ARRAY_END;
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    IsJson(data: string): boolean;
    private IsJsonInstance;
    private IsJsonArray;
    Deserialize(data: string): any;
    Serialize(data: any | any[]): string;
    SerializeObject(data: any): string;
    EncodeHeaderFieldValue(data: string): string;
    EnsureASCII(data: string): string;
    private HasUnicode;
    private ConvertToASCII;
    EnsureUrlDecoded(value: string): string;
}

declare class DrapoServer {
    private _application;
    private _url;
    private _token;
    private _requestHeaders;
    private _requestHeadersNext;
    private _hasBadRequest;
    get Application(): DrapoApplication;
    get HasBadRequest(): boolean;
    set HasBadRequest(value: boolean);
    constructor(application: DrapoApplication);
    private InitializeServer;
    ResolveUrl(url: string): string;
    AppendUrlQueryStringCacheStatic(url: string): Promise<string>;
    private AppendUrlQueryStringTimestamp;
    GetHTML(url: string): Promise<string>;
    GetJSON(url: string, verb?: string, data?: string, contentType?: string, dataKey?: string, headers?: [string, string][], headersResponse?: [string, string][]): Promise<any[]>;
    GetFile(url: string, dataKey?: string, headers?: [string, string][], headersResponse?: [string, string][]): Promise<any[]>;
    private CreateFileObject;
    private ConvertFileBody;
    private Request;
    private RequestInternal;
    CreateResponse(request: DrapoServerRequest, xhr: XMLHttpRequest): DrapoServerResponse;
    private ExtractHeaders;
    private InsertHeaders;
    private InsertHeader;
    private GetHeaderValue;
    SetToken(token: string): Promise<boolean>;
    HasToken(): boolean;
    private GetRequestHeaders;
    private AddHeader;
    AddRequestHeader(key: string, value: string): void;
    GetRequestHeader(key: string): string;
    AddNextRequestHeader(key: string, value: string): void;
    EnsureUrlEncoded(url: string): string;
    EnsureUrlComponentEncoded(url: string): string;
    private IsUrlEncoded;
}

declare class DrapoServerRequest {
    private _verb;
    private _url;
    private _headers;
    private _body;
    private _extractHeaders;
    private _binary;
    get Verb(): string;
    set Verb(value: string);
    get Url(): string;
    set Url(value: string);
    get Headers(): [string, string][];
    set Headers(value: [string, string][]);
    get Body(): string;
    set Body(value: string);
    get ExtractHeaders(): boolean;
    set ExtractHeaders(value: boolean);
    set Binary(value: boolean);
    get Binary(): boolean;
    constructor(verb: string, url: string, headers: [string, string][], body: string, extractHeaders: boolean, binary?: boolean);
}

declare class DrapoServerResponse {
    private _status;
    private _headers;
    private _body;
    get Status(): number;
    set Status(value: number);
    get Headers(): [string, string][];
    set Headers(value: [string, string][]);
    get Body(): any;
    set Body(value: any);
    constructor(status: number, headers: [string, string][], body: any);
}

declare class DrapoSolver {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    ResolveConditional(expression: string | boolean, elj?: JQuery, sector?: string, context?: DrapoContext, renderContext?: DrapoRenderContext, eljForTemplate?: HTMLElement): Promise<boolean>;
    private ResolveConditionalExpressionBlock;
    private ResolveConditionalExpressionBlockOperation;
    private EnsureExpressionItemCurrentLevelResolved;
    private JoinTexts;
    private EnsureExpressionItemResolved;
    private ResolveConditionalBlock;
    private ResolveConditionalOperator;
    ResolveConditionalBoolean(data: string): boolean;
    private ResolveConditionalOperatorLessThan;
    private ResolveConditionalOperatorLessOrEqualThan;
    private ResolveConditionalOperatorGreaterThan;
    private ResolveConditionalOperatorGreaterOrEqualThan;
    private ResolveConditionalOperatorLike;
    private ResolveOperationArithmeticAddition;
    private ResolveOperationArithmeticSubtraction;
    private ResolveOperationArithmeticMultiplication;
    private ResolveOperationArithmeticDivision;
    CreateContextItemFromPath(sector: string, dataPath: string[]): Promise<DrapoContextItem>;
    CreateMustache(dataPath: string[]): string;
    CreateMustacheContext(context: DrapoContext, mustacheParts: string[]): string;
    ResolveDataPathMustache(context: DrapoContext, elementJQuery: JQuery, sector: string, mustacheParts: string[]): Promise<string>;
    ExistDataPath(context: DrapoContext, sector: string, path: string[]): Promise<boolean>;
    private ExistDataPathObject;
    ResolveDataPath(context: DrapoContext, elementJQuery: JQuery, sector: string, path: (string[] | string), canBindReader?: boolean, canBindWriter?: boolean, modelEvents?: string[], modelEventsCancel?: string[]): Promise<string>;
    private ResolveDataPathObject;
    ResolveItemDataPathObject(sector: string, contextItem: DrapoContextItem, dataPath: string[], canForceLoadDataDelay?: boolean): Promise<any>;
    ResolveItemStoragePathObject(item: DrapoStorageItem, dataPath: string[]): any;
    ResolveDataObjectPathObject(dataObject: any, dataPath: string[]): any;
    private GetDataObjectPathObjectPropertyIndex;
    ResolveDataObjectLookupHierarchy(data: any, searchField: string, searchValue: any, searchHierarchyField?: string): any;
    UpdateDataObjectLookupHierarchy(data: any, searchField: string, searchValue: any, value: any, searchHierarchyField?: string): boolean;
    ContainsItemStoragePathObject(item: DrapoStorageItem, dataPath: string[]): boolean;
    ResolveDataPathObjectItem(contextItem: DrapoContextItem, dataKey: string, sector: string, canForceLoadDataDelay?: boolean, dataPath?: string[]): Promise<DrapoContextItem>;
    ResolveDataKey(mustacheParts: string[]): string;
    ResolveDataFields(mustacheParts: string[]): string[];
    CreateDataPath(dataKey: string, dataFields: string[]): string[];
    GetDataPathParent(dataPath: string[]): string[];
    UpdateItemDataPathObject(sector: string, contextItem: DrapoContextItem, dataPath: string[], value: any, canNotify?: boolean): Promise<boolean>;
    UpdateDataPathObject(data: any, dataPath: string[], value: any): boolean;
    Clone(object: any, deepCopy?: boolean): any;
    private CloneArray;
    CloneArrayString(list: string[]): string[];
    CloneArrayElement(list: HTMLElement[]): HTMLElement[];
    CloneArrayAny(list: any[]): any[];
    CloneElement(el: HTMLElement): HTMLElement;
    private GetSystemContextPathValue;
    private GetSystemPathValue;
    private GetSystemContextPathValueIndex;
    private GetSystemContextPathValueIndexRelative;
    private GetSystemContextPathValueLevel;
    private GetSystemContextPathValueHasChanges;
    ResolveSystemContextPath(sector: string, context: DrapoContext, expression: string): string;
    TransformObjectIntoArray(object: any): any[];
    ResolveUrlToAbsolute(urlRelative: string): string;
    Contains(data: string[], item: string): boolean;
    Join(list1: string[], list2: string[]): string[];
    Get(dictionary: [string, string][], key: string): string;
    IsEqualStringArray(list1: string[], list2: string[]): boolean;
    IsEqualString(value1: any, value2: any): boolean;
    EnsureString(data: any): string;
    Replace(data: string, from: string, to: string): string;
    ResolveMathematicalExpression(data: string): string;
}

/// <reference path="../typings/index.d.ts" />
declare class DrapoStorage {
    private _application;
    private _cacheKeys;
    private _cacheItems;
    private _isDelayTriggered;
    private _cacheLocalDataKeyArray;
    private readonly CONTENT_TYPE_JSON;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    Retrieve(elj: JQuery, dataKey: string, sector: string, context: DrapoContext, dataKeyParts?: string[]): Promise<DrapoStorageItem>;
    RetrieveDataItemContext(dataKey: string, sector: string, executionContext?: DrapoExecutionContext<any>): Promise<DrapoStorageItem>;
    RetrieveData(dataKey: string, sector: string, executionContext?: DrapoExecutionContext<any>): Promise<any[]>;
    RetrieveStorageItemsCached(sector: string, dataKeyOrDataGroup: string): DrapoStorageItem[];
    RetrieveDataValue(sector: string, mustache: string): Promise<any>;
    CanGrowData(dataKey: string, sector: string): Promise<boolean>;
    GrowData(dataKey: string, sector: string): Promise<boolean>;
    UpdateData(dataKey: string, sector: string, data: any[] | any, notify?: boolean): Promise<boolean>;
    UpdateDataPath(sector: string, contextItem: DrapoContextItem, dataPath: string[], value: any, canNotify?: boolean): Promise<boolean>;
    ReloadData(dataKey: string, sector: string, notify?: boolean, canUseDifference?: boolean): Promise<boolean>;
    GetSectors(dataKey: string): string[];
    GetSectorDataKeys(sector: string): string[];
    ReloadPipe(dataPipe: string): Promise<boolean>;
    IsMustachePartsDataKey(sector: string, mustacheParts: string[]): boolean;
    IsDataKey(dataKey: string, sector: string, renderContext?: DrapoRenderContext): boolean;
    IsDataKeyDelay(dataKey: string, sector: string): boolean;
    private IsDataKeyElement;
    private IsDataKeyElementInternal;
    ClearCacheLocal(): void;
    IsDataKeyArray(dataKey: string, sector: string): Promise<boolean>;
    private IsDataKeyArrayInternal;
    EnsureDataKeyReady(dataKey: string, sector: string): Promise<number>;
    EnsureDataKeyFieldReady(dataKey: string, sector: string, dataPath: string[]): Promise<boolean>;
    GetData(sector: string, dataPath: string[]): string;
    GetDataKeyField(dataKey: string, sector: string, dataPath: string[], executionContext?: DrapoExecutionContext<any>): string;
    SetDataKeyField(dataKey: string, sector: string, dataFields: string[], value: any, notify?: boolean): Promise<boolean>;
    UpdateDataFieldLookup(dataKey: string, sector: string, dataFieldSeek: string, valueSeek: string, dataField: string | [string], value: any, notify?: boolean): Promise<boolean>;
    RemoveDataItemLookup(dataKey: string, sector: string, dataFieldSeek: string | string[], valueSeek: string, notify?: boolean): Promise<boolean>;
    private CreatePath;
    private CreateDataPath;
    LoadDataDelayedAndNotify(): Promise<void>;
    RetrieveDataItem(dataKey: string, sector: string, canLoadDelay?: boolean, dataDelayFields?: string[]): Promise<DrapoStorageItem>;
    private Filter;
    private GetDataKeyElement;
    private RetrieveDataItemInternal;
    private RetrieveDataKey;
    private RetrieveDataKeyUrl;
    private HasChangeNullOrEmpty;
    private ExtractDataHeaderGet;
    ExtractDataHeaderGetProperty(property: string): string;
    private ExtractDataHeaderSet;
    ExtractDataHeaderSetProperty(property: string): string;
    ResolveDataUrlMustaches(dataKey: string, sector: string, url: string, executionContext: DrapoExecutionContext<any>, changes?: [string, string][]): Promise<string>;
    ResolveDataHeaders(dataKey: string, sector: string, headers: [string, string][], executionContext: DrapoExecutionContext<any>): Promise<[string, string][]>;
    ResolveMustachesRecursive(sector: string, data: string): Promise<string>;
    ResolveMustaches(sector: string, data: string, canSubscribe?: boolean): Promise<string>;
    private ReactivateDataUrlMustache;
    private RetrieveDataKeyInitialize;
    private RetrieveDataKeyInitializeValue;
    private RetrieveDataKeyInitializeArray;
    private RetrieveDataKeyInitializeMapping;
    private RetrieveDataKeyInitializeFunction;
    private RetrieveDataKeyInitializeQueryString;
    private RetrieveDataKeyInitializeParent;
    private BuildObject;
    private RetrieveDataKeyInitializeObject;
    private RetrieveDataProperty;
    private RetrieveDataPropertyKeyIndex;
    private RetrieveDataKeyConfig;
    private RetrieveDataKeyCookie;
    RetrieveIterator(dataKey: string, dataKeyParts: string[], context: DrapoContext): DrapoStorageItem;
    RetrieveIteratorChild(dataKey: string, dataKeyParts: string[], contextData: any): DrapoStorageItem;
    AddDataItem(dataKey: string, sector: string, item: any, notify?: boolean): Promise<boolean>;
    GetDataItemLast(dataKey: string, sector: string): Promise<any>;
    FlagDataItemAsUpdated(dataKey: string, sector: string, index: number, notify?: boolean): Promise<boolean>;
    NotifyChanges(dataItem: DrapoStorageItem, notify: boolean, dataKey: string, dataIndex: number, dataFields: string[], canUseDifference?: boolean): Promise<void>;
    NotifyNoChanges(dataItem: DrapoStorageItem, notify: boolean, dataKey: string): Promise<void>;
    FlagAsUpdated(dataItem: DrapoStorageItem, index: number): boolean;
    GetCacheKeys(): string[];
    private GetCacheKeyIndex;
    IsDataReady(sector: string, dataKey: string): boolean;
    private GetCacheStorageItem;
    private GetCacheData;
    private GetCacheDataItem;
    private AddCacheData;
    private RemoveCacheData;
    AppendCacheDataItemBySector(storageItems: [string, DrapoStorageItem][], sector: string): void;
    AddCacheDataItems(storageItems: [string, DrapoStorageItem][]): void;
    RemoveBySector(sector: string): void;
    DiscardCacheData(dataKey: string, sector: string, canRemoveObservers?: boolean): boolean;
    DiscardCacheDataBySector(sector: string): boolean;
    DeleteDataItem(dataKey: string, sector: string, item: any): Promise<boolean>;
    DeleteDataItemIndex(dataItem: DrapoStorageItem, index: number): boolean;
    private GetDataItemIndex;
    PostData(dataKey: string, sector: string, dataKeyResponse: string, notify: boolean, executionContext: DrapoExecutionContext<any>): Promise<boolean>;
    PostDataItem(dataKey: string, sector: string, dataKeyResponse: string, notify: boolean, executionContext: DrapoExecutionContext<any>): Promise<boolean>;
    PostDataMapping(dataKey: string, sector: string, dataItem: DrapoStorageItem, notify: boolean, executionContext: DrapoExecutionContext<any>): Promise<boolean>;
    ClearData(dataKey: string, sector: string, notify: boolean): Promise<boolean>;
    UnloadData(dataKey: string, sector: string): Promise<boolean>;
    ClearDataToken(): Promise<void>;
    FireEventOnBeforeContainerUnload(sector: string): Promise<void>;
    FireEventOnAfterContainerLoad(sector: string): Promise<void>;
    MoveDataItem(dataKey: string, sector: string, dataMove: any, dataPosition: any, notify: boolean): Promise<boolean>;
    MoveDataIndex(dataKey: string, sector: string, dataMove: any, index: number, notify: boolean): Promise<boolean>;
    ResolveData(executeNoCache: boolean, el?: HTMLElement): Promise<void>;
    ResolveDataElement(executeNoCache: boolean, el: HTMLElement): Promise<void>;
    ResolveDataLoadInternal(executeNoCache: boolean, el: HTMLElement): Promise<void>;
    CreateErrorForStorage(type?: string, message?: string, content?: string): any;
    EnsureDataDelayLoaded(dataItem: DrapoStorageItem, dataPath: string[]): Promise<void>;
    HasChanges(sector: string, dataKey: string): boolean;
    private RetrieveDataItemInternalSystem;
    private CreateDataItemInternal;
    private RetrieveDataItemInternalSystemDebugger;
    private RetrieveDataItemInternalSystemSectors;
    private RetrieveDataItemInternalSystemDataKeysFunction;
    private RetrieveDataItemInternalSystemBreakpoints;
    private RetrieveDataItemInternalSystemNotifys;
    private RetrieveDataItemInternalSystemPipes;
    private RetrieveDataItemInternalSystemErrors;
    private RetrieveDataItemInternalSystemFunctions;
    private RetrieveDataItemInternalSystemComponents;
    private RetrieveDataItemInternalSystemRequests;
    private RetrieveDataItemInternalSystemSectorsUpdate;
    private RetrieveDataItemInternalSystemRuntime;
    private RetrieveDataItemInternalSystemObjects;
    private RetrieveDataItemInternalSystemObjectsExpanded;
    private RetrieveDataItemInternalSystemObjectProperties;
    private RetrieveDataItemInternalSystemObjectData;
    private RetrieveDataItemInternalSystemObjectWatch;
    private RetrieveDataItemInternalSystemObjectsWatchs;
    private RetrieveDataItemInternalSystemObjectsWatchsValues;
    private RetrieveDataItemInternalSystemBrowser;
    private RetrieveDataItemInternalSystemDebuggerProperties;
}

declare class DrapoStorageItem {
    private _type;
    private _access;
    private _element;
    private _data;
    private _dataInserted;
    private _dataUpdated;
    private _dataDeleted;
    private _urlGet;
    private _urlSet;
    private _urlParameters;
    private _postGet;
    private _start;
    private _increment;
    private _isIncremental;
    private _isFull;
    private _isGrowing;
    private _isUnitOfWork;
    private _isDelay;
    private _cookieName;
    private _isCookieChange;
    private _userConfig;
    private _isToken;
    private _sector;
    private _groups;
    private _pipes;
    private _canCache;
    private _onLoad;
    private _onAfterContainerLoad;
    private _onBeforeContainerUnload;
    private _onAfterCached;
    private _headersGet;
    private _headersSet;
    private _hasChanges;
    get Type(): string;
    set Type(value: string);
    get Access(): string;
    set Access(value: string);
    get Element(): Element;
    set Element(value: Element);
    get Data(): any[];
    set Data(value: any[]);
    get DataInserted(): any[];
    set DataInserted(value: any[]);
    get DataUpdated(): any[];
    set DataUpdated(value: any[]);
    get DataDeleted(): any[];
    set DataDeleted(value: any[]);
    get UrlGet(): string;
    set UrlGet(value: string);
    get UrlSet(): string;
    set UrlSet(value: string);
    get UrlParameters(): string;
    get IsUrlParametersRequired(): boolean;
    get PostGet(): string;
    set PostGet(value: string);
    get Start(): number;
    set Start(value: number);
    get Increment(): number;
    set Increment(value: number);
    get IsIncremental(): boolean;
    set IsIncremental(value: boolean);
    get IsFull(): boolean;
    set IsFull(value: boolean);
    get IsGrowing(): boolean;
    set IsGrowing(value: boolean);
    get IsUnitOfWork(): boolean;
    set IsUnitOfWork(value: boolean);
    get IsDelay(): boolean;
    set IsDelay(value: boolean);
    get CookieName(): string;
    set CookieName(value: string);
    get IsCookieChange(): boolean;
    set IsCookieChange(value: boolean);
    get UserConfig(): string;
    set UserConfig(value: string);
    get IsTypeValue(): boolean;
    get IsTypeObject(): boolean;
    get IsTypeParent(): boolean;
    get IsTypeArray(): boolean;
    get IsTypeFunction(): boolean;
    get IsAccessPublic(): boolean;
    get IsAccessPrivate(): boolean;
    get IsToken(): boolean;
    set IsToken(value: boolean);
    get Sector(): string;
    set Sector(value: string);
    get Pipes(): string[];
    set Pipes(value: string[]);
    get CanCache(): boolean;
    set CanCache(value: boolean);
    get OnLoad(): string;
    set OnLoad(value: string);
    get OnAfterContainerLoad(): string;
    set OnAfterContainerLoad(value: string);
    get OnBeforeContainerUnload(): string;
    set OnBeforeContainerUnload(value: string);
    get OnAfterCached(): string;
    set OnAfterCached(value: string);
    get HeadersGet(): [string, string][];
    set HeadersGet(value: [string, string][]);
    get HeadersSet(): [string, string][];
    set HeadersSet(value: [string, string][]);
    get HasChanges(): boolean;
    set HasChanges(value: boolean);
    constructor(type: string, access: string, element: Element, data: any[], urlGet: string, urlSet: string, urlParameters: string, postGet: string, start: number, increment: number, isIncremental: boolean, isFull: boolean, isUnitOfWork: boolean, isDelay: boolean, cookieName: string, isCookieChange: boolean, userConfig: string, isToken: boolean, sector: string, groups: string[], pipes: string[], canCache: boolean, onLoad: string, onAfterContainerLoad: string, onBeforeContainerUnload: string, onAfterCached: string, headersGet: [string, string][], headersSet: [string, string][]);
    private Initialize;
    ContainsGroup(group: string): boolean;
}

declare enum DrapoStorageLinkType {
    Render = 0,
    RenderClass = 1,
    Reload = 2
}

declare class DrapoStylist {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    Create(values: [string, string][], name?: string): string;
    private CreateStyleName;
    private StringfyValues;
    ReloadStyles(): Promise<void>;
    private AddStyleToDocument;
}

declare class DrapoValidator {
    private _application;
    private _sectors;
    private _sectorsValidationRuleIDs;
    private _sectorsValidationRuleTypes;
    private _sectorsValidationRuleValues;
    private _sectorsValidationRuleTags;
    private _sectorsValidationRuleContexts;
    private _sectorsValidationGroupGroups;
    private _sectorsValidationGroupRules;
    private _sectorsValidationGroupContexts;
    private _sectorsValidationInterfaceIDs;
    private _sectorsValidationInterfaceElements;
    private _sectorsValidationInterfaceContexts;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    HasContentValidation(content: string): boolean;
    UnloadSectorHierarchy(sector: string): void;
    UnloadSector(sector: string): void;
    RegisterValidation(el: HTMLElement, sector: string, context?: DrapoContext): Promise<void>;
    private ResolveValidationID;
    private GetValidationTag;
    IsValidationEventValid(el: HTMLElement, sector: string, eventType: string, location: string, event: JQueryEventObject): Promise<boolean>;
    IsValidationExpressionValid(el: HTMLElement, sector: string, validation: string, event?: JQueryEventObject): Promise<boolean>;
    UncheckValidationExpression(el: HTMLElement, sector: string, validation: string): Promise<void>;
    private GetSectorIndex;
    private GetIndex;
    private GetElement;
    private EnsureSector;
    private AddValidationRule;
    private AddValidationGroups;
    private AddValidationGroup;
    private AddValidationInterface;
    private ExtractValidations;
    private ExtractValidationProperty;
    private ResolveValidations;
    private ExtractValidators;
    private IsValidationValid;
    private IsValidationGroup;
    private IsValidationGroupValid;
    private GetValidationGroupRules;
    private IsValidationRuleValid;
    private GetValidationRuleElements;
    private IsRuleValid;
    private IsValid;
    private IsValidConditional;
    private IsValidRegex;
    private IsValidCompare;
    private CreateContext;
    private IsValidOutside;
    private UncheckValidation;
    private UncheckValidationGroup;
    private UncheckValidationRule;
    IsValidatorInterface(el: HTMLElement): boolean;
}

declare class DrapoView {
    private _name;
    private _tag;
    private _condition;
    get Name(): string;
    set Name(value: string);
    get Tag(): string;
    set Tag(value: string);
    get Condition(): string;
    set Condition(value: string);
}

declare class DrapoViewport {
    private _busy;
    private _sector;
    private _dataKey;
    private _key;
    private _dataKeyIteratorRange;
    private _data;
    private _el;
    private _elScroll;
    private _elTemplate;
    private _elBallonBefore;
    private _elBallonAfter;
    private _heightScroll;
    private _heightBefore;
    private _heightAfter;
    private _heightItem;
    private _heightBallonBefore;
    private _heightBallonAfter;
    private _dataStart;
    private _dataEnd;
    private _dataLength;
    private _factor;
    private _eventScrollTimeout;
    private _scrollTop;
    get Busy(): boolean;
    set Busy(value: boolean);
    get Sector(): string;
    set Sector(value: string);
    get DataKey(): string;
    set DataKey(value: string);
    get Key(): string;
    set Key(value: string);
    get DataKeyIteratorRange(): string;
    set DataKeyIteratorRange(value: string);
    get Data(): any[];
    set Data(value: any[]);
    get Element(): HTMLElement;
    set Element(value: HTMLElement);
    get ElementTemplate(): HTMLElement;
    set ElementTemplate(value: HTMLElement);
    get ElementBallonBefore(): HTMLElement;
    set ElementBallonBefore(value: HTMLElement);
    get ElementBallonAfter(): HTMLElement;
    set ElementBallonAfter(value: HTMLElement);
    get ElementScroll(): HTMLElement;
    set ElementScroll(value: HTMLElement);
    get HeightScroll(): number;
    set HeightScroll(value: number);
    get HeightBefore(): number;
    set HeightBefore(value: number);
    get HeightAfter(): number;
    set HeightAfter(value: number);
    get HeightItem(): number;
    set HeightItem(value: number);
    get HeightBallonBefore(): number;
    set HeightBallonBefore(value: number);
    get HeightBallonAfter(): number;
    set HeightBallonAfter(value: number);
    get DataStart(): number;
    set DataStart(value: number);
    get DataEnd(): number;
    set DataEnd(value: number);
    get DataLength(): number;
    set DataLength(value: number);
    get Factor(): number;
    set Factor(value: number);
    get EventScrollTimeout(): number;
    set EventScrollTimeout(value: number);
    get ScrollTop(): number;
    set ScrollTop(value: number);
}

declare class DrapoViewportHandler {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    IsElementControlFlowRenderViewport(el: HTMLElement): boolean;
    CreateViewportControlFlow(sector: string, el: HTMLElement, elTemplate: HTMLElement, dataKey: string, key: string, dataKeyIteratorRange: string, data: any[], canCreateViewport: boolean): DrapoViewport;
    CreateViewportControlFlowBallonBefore(viewport: DrapoViewport, lastInserted: JQuery): JQuery;
    private GetBallonBefore;
    private GetElementItemHeight;
    AppendViewportControlFlowBallonAfter(viewport: DrapoViewport, fragment: DocumentFragment): void;
    ActivateViewportControlFlow(viewport: DrapoViewport): void;
    GetViewportControlFlowStart(viewport: DrapoViewport, start: number): number;
    GetViewportControlFlowEnd(viewport: DrapoViewport, length: number): number;
    UpdateHeightItem(viewport: DrapoViewport, elItem: HTMLElement): boolean;
    private UpdateValues;
    private UpdateValuesBallon;
    UpdateElementsBallon(viewport: DrapoViewport): void;
    private GetElementHeightRect;
    private GetElementStyleHeight;
    private GetElementHeight;
    private GetScrollViewport;
    private HasOverflowY;
    private IsOverflowEnabled;
    GetView(viewport: DrapoViewport): [number, number, number, number, number, number];
    private GetViewFactorCurrent;
}

declare class DrapoWindow {
    private _did;
    private _uri;
    private _element;
    private _visible;
    private _code;
    get Did(): string;
    set Did(value: string);
    get Uri(): string;
    set Uri(value: string);
    get Element(): HTMLElement;
    set Element(value: HTMLElement);
    get Visible(): boolean;
    set Visible(value: boolean);
    get Code(): string;
    set Code(value: string);
}

declare class DrapoWindowHandler {
    private _application;
    private _windows;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    CreateAndShowWindowDefinition(name: string, parameters: [string, string][]): Promise<void>;
    CreateAndShowWindow(uri: string, did: string, parameters: [string, string][], parametersDefault?: any): Promise<void>;
    private IsWindowLoaded;
    CloseWindow(did: string, all: boolean, type: string): Promise<void>;
    TryClose(window: DrapoWindow): Promise<void>;
    DestroyWindowElement(window: DrapoWindow): Promise<void>;
    HideWindow(did: string, all: boolean): Promise<DrapoWindow>;
    private GetWindowDefinition;
    GetWindowByElement(el: Element): DrapoWindow;
}
