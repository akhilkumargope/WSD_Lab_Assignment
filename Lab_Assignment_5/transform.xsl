<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>Online Book Order and Rental</title>
                <style>
                    body 
                    { 
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        margin: 0; padding: 20px;
                        
                    }
                    h1 
                    { 
                        color: #333;
                        text-align: center;
                    }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
                    th { background-color: #4CAF50; color: white; }
                    tr:nth-child(even) { background-color: #f2f2f2; }
                    tr:hover { background-color: #ddd; }
                </style>
            </head>
            <body>
                <h1>Online Book Order and Rental Details</h1>
                <h2>Customer Details</h2>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    <xsl:for-each select="BookOrder/Customer">
                        <tr>
                            <td><xsl:value-of select="@id"/></td>
                            <td><xsl:value-of select="Name"/></td>
                            <td><xsl:value-of select="Email"/></td>
                            <td><xsl:value-of select="Address"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                <h2>Order Details</h2>
                <table>
                    <tr>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Rental Period</th>
                    </tr>
                    <xsl:for-each select="BookOrder/Order">
                        <tr>
                            <td><xsl:value-of select="@id"/></td>
                            <td><xsl:value-of select="OrderDate"/></td>
                            <xsl:for-each select="Item">
                                <td><xsl:value-of select="Title"/></td>
                                <td><xsl:value-of select="Author"/></td>
                                <td><xsl:value-of select="Price"/></td>
                                <td><xsl:value-of select="RentalPeriod"/></td>
                            </xsl:for-each>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
