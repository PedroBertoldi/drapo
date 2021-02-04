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
    ParseQuery(value: string): DrapoQuery;
    ParseQueryProjections(value: string): DrapoQueryProjection[];
    private ParseQueryProjection;
    private ParseQueryProjectionAlias;
    private ParseQuerySources;
    private ParseQuerySource;
    private ParseQueryConditional;
    private ParseSubstring;
    private ParseQuerySourcesSplit;
    private ParseQuerySourceHead;
    private ParseQuerySourceHeadValue;
    private ParseQueryFilter;
}
