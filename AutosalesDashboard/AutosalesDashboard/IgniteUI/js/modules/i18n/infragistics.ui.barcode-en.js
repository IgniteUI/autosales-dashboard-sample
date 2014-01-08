/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Barcode) {
	$.ig.Barcode = {
		locale: {
			aILength: "The AI should have at least 2 digits.",
			badFormedUCCValue: "The Data property value of the UCC barcode is not well formed. It should look like (AI)GTIN.",
			code39_NonNumericError: "The character '{0}' is invalid for CODE39 Data property value. The valid ones are: {1}",
			countryError: "Error converting Country property value code. It should be a numeric value.",
			emptyValueMsg: "The Data property value is empty.",
			encodingError: "Error in the convertion. Refer to the documentation for the valid property values.",
			errorMessageText: "Invalid value! Reference the documentation for the valid barcode Data property value structure.",
			gS1ExMaxAlphanumNumber: "The GS1 DataBar Expanded family can encode up to 41 alphanumeric characters.",
			gS1ExMaxNumericNumber: "The GS1 DataBar Expanded family can encode up to 74 numeric characters.",
			gS1Length: "The GS1 DataBar Data property value is used for GTIN - 8, 12, 13, 14 and its length should be 7, 11, 12 or 13. The last digit is reserved for a check sum.",
			gS1LimitedFirstChar: "GS1 DataBar Limited barcode should have 0 or 1 in the first digit. When encoding GTIN-14 data with an Indicator value greater than 1, Omnidirectional, Stacked, Stacked Omnidirectional or Truncated barcode type must be used.",
			i25Length: "The Interleaved2of5 barcode should have even number of digits. You can put 0 in the front of it if they are odd number.",
			intelligentMailLength: "The length of the Intelligent Mail barcode Data property value should be 20, 25, 29 or 31 characters - 20 digits track code (2 for barcode identifier, 3 for service type identifier, 6 or 9 for mailer identifier and 9 or 6 for serial number) and 0, 5, 9 or 11 zip code symbols.",
			intelligentMailSecondDigit: "The second digit should be in the range of 0-4.",
			invalidAI: "Invalid Application Identifier element strings. Please, ensure that the AI string in the Data property value is well formed.",
			invalidCharacter: "The character '{0}' is invalid for the current barcode type. The valid ones are: {1}",
			invalidDimension: "The barcode dimension cannot be determined because of an incorrect combination of Stretch, BarsFillMode and XDimension property values.",
			invalidHeight: "This number of barcode grid rows ({0}) cannot fit in such a height ({1} pixel(s)).",
			invalidLength: "The barcode Data property value should have {0} digit(s).",
			invalidPostalCode: "Invalid PostalCode value - Mode 2 encodes up to 9 digits postal code (U.S. zip code) while Mode 3 encodes up to 6 characters alpha-numeric code.",
			invalidPropertyValue: "The {0} property value should be in the range of {1}-{2}.",
			invalidVersion: "The SizeVersion propery value number does not generate enough cells to encode the data with the current encoding mode and error correction level.",
			invalidWidth: "This number of barcode grid columns ({0}) cannot fit in such a width ({1} pixel(s)). Check the XDimension or/and the WidthToHeightRatio property values.",
			invalidXDimensionValue: "The XDimension property value should be in the range of {0} to {1} for the current barcode type.",
			maxLength: "The length {0} of the text exceeds the maximum encodable for the current type of barcode. It could encode max {1} characters.",
			notSupportedEncoding: "The encoding corresponding under the {0} {1} is not supported.",
			pDF417InvalidRowsColumnsCombination: "The codewords (data & error correction) are more than can be encoded in symbol with a matrix {0}x{1}.",
			primaryMessageError: "Cannot extract the primary message from the Data property value. Refer to the documentation for its structure.",
			serviceClassError: "Error converting service class. It should be a numeric value.",
			smallSize: "Cannot fit the grid in Size({0}, {1}) with the defined Stretch settings.",
			unencodableCharacter: "The character '{0}' cannot be encoded.",
			uPCEFirstDigit: "The first UPCE digit shall always be zero by specification.",
			warningString: "Barcode warning: ",
			wrongCompactionMode: "The Data property value cannot be compacted with {0} mode.",
            notLoadedEncoding: "The {0} encoding is not loaded."
		}
	};
}
