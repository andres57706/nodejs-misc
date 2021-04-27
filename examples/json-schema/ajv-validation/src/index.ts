import Ajv from 'ajv';

const ajv = new Ajv({
    schemas: [
        { // register valid json-schemas
            // $schema: 'http://json-schema.org/draft-04/schema#',
            $id: 'http://json-schema.org/draft-04/schema#'
        }
    ]
});

const schema1 = {
    "$schema": "http://json-schema.org/schema",
    "type": "object",
    "properties": {
        "id": {
            "type": "number"
        },
        "name": {
            "type": "string"
        }
    },
    "additionalProperties": true
};

const schema2 = {
    $schema: 'http://json-schema.org/draft-04/schema#bad_value', // using an invalid json schema
    type: 'object',
    properties: {
        headers: { type: 'object' },
        parameters: { type: 'object' },
        body: { type: 'object' },

    },
    required: ['body', 'parameters', 'headers']
};


try {
    console.log(`schema 1 validation result: `, ajv.validateSchema(schema1));
} catch (e) {
    console.log(`Error validating schema1: ${e.message}`);
}

try {
    console.log(`schema 2 validation result: `, ajv.validateSchema(schema2));
} catch (e) {
    console.log(`Error validating schema2: ${e.message}`);
}