import { describe, it, expect } from "vitest";
import { findTCalls } from "../src/parser";
import ts from "typescript";


describe("findTCalls", () => {
    it("finds __t invocations", () => {
        const src_file = `function example() { __t("example", "Hello world!") }`;
        const source = ts.createSourceFile("example.ts", src_file, ts.ScriptTarget.Latest, true);
        const result = findTCalls(source, source);

        expect(result.type).toBe("ok")

        if (result.type !== "ok")
        {
            throw new Error("expected result.type to be 'ok'")
        }

        expect(result.translations).toHaveLength(1)

        expect(result.translations[0].translation.key).toBe("example");
        expect(result.translations[0].translation.message).toBe("Hello world!")
    })
})