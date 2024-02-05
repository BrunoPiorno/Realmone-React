import { gutenbergBlocks } from "../Blocks/index.js";
import { dashCasetoPascalCase } from "../../utils/dashCasetoPascalCase";

export const BlockRenderer = ({ pageBlocks }) => {
    
    let pagecontent = [];

    const parseBlock = (blocks, pagecontent) => {
        blocks.map((block) => {
            if (block.name !== null) {
                let blockName = block.name.split("/");

                if (blockName[0] == "core") {
                    pagecontent.push(
                        <gutenbergBlocks.Core
                            key={block.id}
                            data={block.originalContent}
                        />
                    );
                } else {
                    blockName = dashCasetoPascalCase(blockName[1]);
                    if (gutenbergBlocks[blockName]) {
                        let BlockComponent = gutenbergBlocks[blockName];

                        let blockData = [];
                        try {
                            blockData = JSON.parse(block.dynamicContent);
                        } catch (e) {
                            //return console.error(e); // error in the above string (in this case, yes)!
                        }

                        pagecontent.push(
                            <BlockComponent
                                key={block.id}
                                data={block.attributes.data}
                                blockData={blockData}
                            />
                        );
                    } else {
                        console.warn(
                            "Missing component for block: " + blockName
                        );
                    }
                }
            }
        });
        //console.log("pagecontent: ", pagecontent);
        return pagecontent;
    };

    pagecontent = parseBlock(pageBlocks, pagecontent);

    return <>{pagecontent}</>;
};
