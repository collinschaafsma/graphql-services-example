import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import { writeFileSync } from 'fs';

const typeDefs = mergeTypes(fileLoader(`${__dirname}/../../services/**/schema.graphql`), { all: true });
writeFileSync('schema.graphql', typeDefs);
